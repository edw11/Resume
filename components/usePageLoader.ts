"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const TIMEOUT_MS = 5000;

export function usePageLoader() {
  const [isLoading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    setLoading(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const onImageLoad = useCallback(() => {
    dismiss();
  }, [dismiss]);

  useEffect(() => {
    window.scrollTo(0, 0);

    timerRef.current = setTimeout(() => {
      dismiss();
    }, TIMEOUT_MS);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [dismiss]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (isLoading) {
      el.style.overflow = "hidden";
      el.style.height = "100vh";
    } else {
      el.style.overflow = "";
      el.style.height = "";
    }
  }, [isLoading]);

  return { isLoading, onImageLoad, containerRef };
}

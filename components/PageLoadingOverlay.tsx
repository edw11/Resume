import Image from "next/image";

export default function PageLoadingOverlay({
  isLoading,
}: {
  isLoading: boolean;
}) {
  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-black fixed inset-0 z-10 transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image
        src="/icons/loader.svg"
        alt="loader"
        width={24}
        height={24}
        className="ml-2 animate-spin"
      />
    </div>
  );
}

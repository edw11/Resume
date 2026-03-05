import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black fixed inset-0 z-10">
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

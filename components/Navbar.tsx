// https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644c8981f87a7036b4c7fa64_icon-%40.svg
import Image from "next/image";
import Slide from "./Slide";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="relative flex items-center py-6 px-7 lg:justify-between xl:px-14">
      <div className=" max-md:hidden max-lg:w-full ">
        <p className=" text-white font-bold text-base xl:text-lg">
          Edward Cahyadi
        </p>
        <p className="text-sm text-gray-400 xl:text-base">Software Developer</p>
      </div>

      <div className="flex md:gap-4 w-full md:justify-end justify-between lg:hidden ">
        <Slide />

        <div className="flex justify-center p-4 bg-dark_grey rounded-full">
          <Image
            src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644c8981f87a7036b4c7fa64_icon-%40.svg"
            alt="@"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="max-lg:hidden">
        <Slide />
      </div>

      <div className="flex gap-5 text-lg max-lg:hidden">
        <div className="flex gap-2 hover:text-shadow">
          <Link href={"/"}>Linkedin</Link>
        </div>
        <div className="flex gap-2 hover:text-shadow">
          <Link href={"/"}>Resume</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

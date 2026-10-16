import NavLogo from "@/assests/logo-icon.png";
import Image from "next/image";
import Time from "../Time";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center gap-4">
        <Link href={"/"}>
          <div className="flex justify-center items-center w-[60] h-[60] bg-[#05893E] rounded-xl">
            <Image
              className="object-contain"
              src={NavLogo}
              alt=""
              width={40}
              height={40}
            ></Image>
          </div>
        </Link>

        <div className="flex flex-col">
          <h1 className="font-bold text-[20px] text-[#1D271F]">বাজার দর</h1>
          <Time></Time>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <button className="font-semibold text-[#1D271F]">সাইন ইন</button>
        <button className="px-3 py-2 rounded-xl bg-[#05893E] text-white font-semibold">
          সাইন আপ
        </button>
      </div>
    </div>
  );
};

export default Navbar;

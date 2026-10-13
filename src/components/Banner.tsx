import Image from "next/image";
import Time from "./Time";
import LogoImg from "@/assests/bazar-hero.png";
const BannerPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg border-2 border-gray-300 rounded-xl p-5">
      <div className="space-y-3">
        <div className="text-[#05893E] bg-green-50 px-3 py-2 rounded-xl">
          <Time></Time>
        </div>
        <h1 className="text-[36px] font-bold text-[#1D271F]">
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="text-[16px] text-[#1D271F]">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন- <br />
          সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <button className="px-3 py-2 rounded-xl bg-[#05893E] text-white font-semibold">
          সব পণ্য দেখুন
        </button>
      </div>
      <div>
        <Image src={LogoImg} alt="" width={400} height={400}></Image>
      </div>
    </div>
  );
};

export default BannerPage;

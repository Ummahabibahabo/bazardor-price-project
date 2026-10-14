import Image from "next/image";
import Link from "next/link";
import Time from "./Time";
import LogoImg from "@/assests/bazar-hero.png";

const BannerPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-6 bg-white shadow-lg border border-gray-200 rounded-2xl p-6 md:p-8 lg:p-10 overflow-hidden">
      {/* Banner Content */}
      <div className="space-y-5">
        <div className="inline-flex items-center text-[#05893E] bg-green-50 border border-green-100 px-4 py-2 rounded-full text-sm font-medium">
          <Time />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-[42px] leading-snug font-bold text-[#1D271F]">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="text-sm md:text-base leading-7 text-gray-600 max-w-xl">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <div className="pt-2">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#05893E] text-white font-semibold shadow-md shadow-green-100 hover:bg-[#047332] hover:shadow-lg transition-all duration-300"
          >
            সব পণ্য দেখুন
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>

      {/* Banner Image */}
      <div className="relative flex justify-center items-center">
        <div className="absolute w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-green-50 rounded-full" />

        <Image
          className="relative w-full max-w-[320px] md:max-w-[360px] lg:max-w-[420px] h-auto object-contain"
          src={LogoImg}
          alt="আজকের বাজারের পণ্যের মূল্য"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default BannerPage;

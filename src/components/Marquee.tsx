import Marquee from "react-fast-marquee";
import { ProductType } from "./type";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { FaEquals } from "react-icons/fa";
import Link from "next/link";

const MarqueePage = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const marqueeData: ProductType[] = await res.json();
  const unitText = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };
  return (
    <div className="w-full overflow-hidden border-y border-gray-200 bg-white">
      <Marquee>
        <div className="flex">
          {marqueeData.map((data) => (
            <Link
              className="hover:underline"
              href={`/product/${data.id}`}
              key={data.id}
            >
              <div className="flex items-center gap-2 border-r-2 border-gray-100 px-4 py-2">
                {/* Image */}
                <span className="text-base">{data.image}</span>

                {/* Name */}
                <span className="text-[16px] font-bold text-[#1D271F] ">
                  {data.nameBn}
                </span>

                {/* Price */}
                <span className="text-[14px] text-[#1D271F]">
                  {data.today.toLocaleString("bn-BD")} টাকা/
                  {unitText[data.unit]}
                </span>

                {/* Change */}
                <span
                  className={`flex items-center gap-2 text-xs font-semibold ${
                    data.change.dir === "up"
                      ? "text-red-500"
                      : data.change.dir === "down"
                        ? "text-green-600"
                        : "text-gray-500"
                  }`}
                >
                  {data.change.dir === "up" ? (
                    <RxTriangleUp className="text-base" />
                  ) : data.change.dir === "down" ? (
                    <RxTriangleDown className="text-base" />
                  ) : (
                    <FaEquals className="text-[10px]" />
                  )}

                  <span className="text-[14px]">
                    {Math.abs(data.change.pct).toLocaleString("bn-BD")}%
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueePage;

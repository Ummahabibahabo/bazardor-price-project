import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { ProductType } from "./type";
import { FaEquals } from "react-icons/fa";
import Link from "next/link";

interface ProductCardPageProps {
  data: ProductType;
}
const ProductCardPage = ({ data }: ProductCardPageProps) => {
  const unitText = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };
  return (
    <Link href={`/product/${data.id}`}>
      <div>
        <div className="flex gap-5">
          <div className="flex items-center justify-center h-[50px] w-[50px] rounded-xl bg-gray-200 ">
            <span className="text-[27px]">{data.image}</span>
          </div>
          <div>
            <p className="text-[16px] font-semibold text-[#1D271F]">
              {data.nameBn}
            </p>
            <p className="text-[12px]  text-[#1D271F]">
              প্রতি {unitText[data.unit]}
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-[16px]  text-[#1D271F]">আজকের দাম</p>
          <div className="flex justify-between items-center">
            <p className="text-[16px]  text-[#1D271F]">
              <span className="text-[16px] font-bold text-[#1D271F]">
                {data.today.toLocaleString("bn-BD")}
              </span>{" "}
              টাকা
            </p>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-xl">
              <span>
                {data.change.dir === "up" ? (
                  <RxTriangleUp className="text-red-600 text-[30px]" />
                ) : data.change.dir === "down" ? (
                  <RxTriangleDown className="text-green-600 text-[30px]" />
                ) : (
                  <FaEquals className="text-gray-400" />
                )}
              </span>
              <p
                className={`text-[16px] font-bold ${data.change.dir === "up" ? "text-red-600" : data.change.dir === "down" ? "text-green-600" : "text-gray-500"}`}
              >
                {Math.abs(data.change.pct).toLocaleString("bn-BD")} %
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardPage;

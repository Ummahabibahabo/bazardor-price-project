import { ProductType } from "@/components/type";
import { FaEquals } from "react-icons/fa";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

interface ProductSummaryProps {
  singleProduct: ProductType;
}

const ProductSummary = ({ singleProduct }: ProductSummaryProps) => {
  const unitText = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };
  const priceDifference = Math.abs(
    singleProduct.today - singleProduct.yesterday,
  );
  const priceMessage =
    singleProduct.today > singleProduct.yesterday
      ? `গতকালের তুলনায় আজ দাম বেড়েছে ${priceDifference.toLocaleString("bn-BD")} টাকা`
      : singleProduct.today < singleProduct.yesterday
        ? `গতকালের তুলনায় আজ দাম কমেছে ${priceDifference.toLocaleString("bn-BD")} টাকা`
        : "গতকালের তুলনায় আজ দাম অপরিবর্তিত";
  return (
    <div className="flex flex-col gap-5 md:flex-row justify-between items-center bg-white shadow-lg rounded-xl p-5">
      {/* left-side */}

      <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-3">
        <div className="bg-[#F0F5F0] px-3 py-2 rounded-xl h-[80px] w-[80px] flex items-center">
          <span className="text-4xl">{singleProduct.image}</span>
        </div>

        <div className="">
          <h1 className="font-bold text-[#1D271F] text-[30px]">
            {singleProduct.nameBn}
          </h1>

          <p className="text-[16px] text-[#1D271F]">
            প্রতি {unitText[singleProduct.unit]}
          </p>

          <p className="text-[16px] text-[#1D271F]">{priceMessage}</p>
        </div>
      </div>

      {/* right-side */}
      <div className="text-center bg-[#F0F5F0] rounded-xl p-5">
        <p className="text-[16px] text-[#1D271F]">আজকের দাম</p>
        <h1 className="font-bold text-[#1D271F] text-[30px]">
          {singleProduct.today.toLocaleString("bn-BD")}
        </h1>
        <p className="text-[16px] text-[#1D271F]">
          টাকা / {unitText[singleProduct.unit]}
        </p>
        <div className="flex items-center gap-1.5 ">
          <span>
            {singleProduct.change.dir === "up" ? (
              <RxTriangleUp className="text-red-600 text-[30px]" />
            ) : singleProduct.change.dir === "down" ? (
              <RxTriangleDown className="text-green-600 text-[30px]" />
            ) : (
              <FaEquals className="text-gray-400" />
            )}
          </span>
          <p
            className={`text-[16px] font-bold ${singleProduct.change.dir === "up" ? "text-red-600" : singleProduct.change.dir === "down" ? "text-green-600" : "text-gray-500"}`}
          >
            {Math.abs(singleProduct.change.pct).toLocaleString("bn-BD")} %
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;

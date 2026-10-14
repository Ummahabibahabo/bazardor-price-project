import ProductCardPage from "@/components/ProductCard";
import { ProductType } from "@/components/type";
import { RxTriangleDown } from "react-icons/rx";

interface TopFallersProductPriceProps {
  topFallerProduct: ProductType[];
}

const TopFallersProduct = ({
  topFallerProduct,
}: TopFallersProductPriceProps) => {
  return (
    <div>
      <div className="flex items-center mt-10">
        <RxTriangleDown className="text-green-600 text-[30px]" />
        <p className="font-bold text-[20px] text-[#1D271F]">আজ দাম কমেছে</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {topFallerProduct.map((data) => (
          <div className="bg-white shadow-lg p-5 rounded-xl" key={data.id}>
            <ProductCardPage data={data}></ProductCardPage>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFallersProduct;

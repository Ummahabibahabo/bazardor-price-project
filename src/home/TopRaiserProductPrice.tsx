import ProductCardPage from "@/components/ProductCard";
import { ProductType } from "@/components/type";
import { RxTriangleUp } from "react-icons/rx";

interface TopRaiserProductPrice {
  topRiseProduct: ProductType[];
}

const TopRaiserProductPrice = ({ topRiseProduct }: TopRaiserProductPrice) => {
  console.log(topRiseProduct);
  return (
    <div>
      <div className="flex items-center mt-10">
        <RxTriangleUp className="text-red-600 text-[30px]" />
        <p className="font-bold text-[20px] text-[#1D271F]">আজ দাম বেড়েছে</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {topRiseProduct.map((data) => (
          <div className="bg-white shadow-lg p-5 rounded-xl" key={data.id}>
            <ProductCardPage data={data}></ProductCardPage>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRaiserProductPrice;

import ProductCardPage from "@/components/ProductCard";
import { ProductType } from "@/components/type";

interface AllProductPageProps {
  topData: ProductType[];
}

const AllProductPage = ({ topData }: AllProductPageProps) => {
  return (
    <div id="সব-পণ্য" className="scroll-mt-6">
      <div className="flex flex-col  mt-10">
        <p className="font-bold text-[20px] text-[#1D271F]">সব পণ্য</p>
        <p className="text-[16px] text-[#1D271F]">
          মোট {topData.length} টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {topData.map((data) => (
          <div className="bg-white shadow-lg p-5 rounded-xl" key={data.id}>
            <ProductCardPage data={data}></ProductCardPage>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductPage;

import { ProductType } from "@/components/type";
import CategorySortPage from "../CategorySort";
import ProductCardPage from "@/components/ProductCard";

interface SingleCategoryType {
  icon: string;
  id: string;
  nameBn: string;
  slug: string;
}
const CategoryIdPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/categories/${categoryId}`,
  );
  const singleCategory: SingleCategoryType = await res.json();
  const productRes = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );
  const singleProduct: ProductType[] = await productRes.json();

  return (
    <div>
      <div className="border border-gray-200 rounded-xl bg-white shadow-lg p-7">
        <div className="flex items-center gap-2">
          <span className="text-[30px]">{singleCategory.icon}</span>
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-[#1D271F] text-[24px]">
              {singleCategory.nameBn}
            </h1>
            <p className="text-[14px] text-[#1D271F]">
              {singleProduct.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম
              ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>
      <CategorySortPage></CategorySortPage>
      <p className="py-6">
        মোট {singleProduct.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {singleProduct.map((data) => (
          <div
            className="border border-gray-200 rounded-xl bg-white shadow-lg p-7"
            key={data.id}
          >
            <ProductCardPage data={data}></ProductCardPage>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIdPage;

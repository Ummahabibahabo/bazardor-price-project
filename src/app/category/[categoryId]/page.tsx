import { ProductType } from "@/components/type";
import CategorySortPage from "../CategorySort";
import { notFound } from "next/navigation";

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
  if (!singleCategory) {
    notFound();
  }
  const productRes = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );
  const singleProductData: ProductType[] = await productRes.json();
  if (!singleProductData || singleProductData.length === 0) {
    notFound();
  }
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
              {singleProductData.length.toLocaleString("bn-BD")} টি পণ্যের আজকের
              দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>
      <CategorySortPage
        singleProductData={singleProductData}
      ></CategorySortPage>
    </div>
  );
};

export default CategoryIdPage;

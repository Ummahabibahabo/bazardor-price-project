"use client";
import ProductCardPage from "@/components/ProductCard";
import { ProductType } from "@/components/type";
import { useState } from "react";

interface CategoryIdPageProps {
  singleProduct: ProductType[];
}

const CategorySortPage = ({ singleProduct }: CategoryIdPageProps) => {
  const [sortBy, setSortBy] = useState<
    "default" | "low-to-high" | "high-to-low"
  >("default");
  const sortedProduct = [...singleProduct];
  if (sortBy === "low-to-high") {
    sortedProduct.sort((a, b) => Number(a.today) - Number(b.today));
  } else if (sortBy === "high-to-low") {
    sortedProduct.sort((a, b) => Number(b.today) - Number(a.today));
  }
  return (
    <div>
      <p className="py-6">
        মোট {singleProduct.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {sortedProduct.map((data) => (
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

export default CategorySortPage;

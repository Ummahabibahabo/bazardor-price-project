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
      <div className="border border-gray-200 rounded-xl bg-white shadow-lg p-7 mt-10">
        <div className="text-[14px] text-[#1D271F] flex items-center justify-end gap-5">
          <p>সাজান</p>

          <select
            className="border-2 border-gray-300 p-1 rounded-xl"
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as "default" | "low-to-high" | "high-to-low",
              )
            }
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-to-high">দাম: কম থেকে বেশি</option>
            <option value="high-to-low">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {sortedProduct.map((data) => (
          <div
            className="border border-gray-200 rounded-xl bg-white shadow-lg p-7"
            key={data.id}
          >
            <ProductCardPage data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySortPage;

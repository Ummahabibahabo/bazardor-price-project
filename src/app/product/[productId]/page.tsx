import { ProductType } from "@/components/type";
import ProductSummary from "../ProductSummary";
import ProductPriceOverview from "../ProductPriceOverview";
import { notFound } from "next/navigation";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
  );
  const singleProduct: ProductType = await res.json();
  if (!singleProduct || !singleProduct.id) {
    notFound();
  }
  return (
    <div>
      <ProductSummary singleProduct={singleProduct}></ProductSummary>
      <ProductPriceOverview
        singleProduct={singleProduct}
      ></ProductPriceOverview>
    </div>
  );
};

export default ProductDetailsPage;

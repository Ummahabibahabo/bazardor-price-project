import { ProductType } from "@/components/type";
import TopFallersProductPrice from "./TopRaiserProductPrice";
import TopRaiserProductPrice from "./TopRaiserProductPrice";
import TopFallersProduct from "./TopFallersProduct";
import AllProductPage from "./AllProduct";

const HomePage = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const topData: ProductType[] = await res.json();
  const topRiseProduct = topData
    .filter((data) => data.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
  const topFallerProduct = topData
    .filter((fallerData) => fallerData.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div>
      <TopRaiserProductPrice
        topRiseProduct={topRiseProduct}
      ></TopRaiserProductPrice>
      <TopFallersProduct
        topFallerProduct={topFallerProduct}
      ></TopFallersProduct>
      <AllProductPage topData={topData}></AllProductPage>
    </div>
  );
};

export default HomePage;

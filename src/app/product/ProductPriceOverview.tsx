import { ProductType } from "@/components/type";

interface ProductPriceOverviewProps {
  singleProduct: ProductType;
}

const ProductPriceOverview = ({ singleProduct }: ProductPriceOverviewProps) => {
  const unitText: Record<ProductType["unit"], string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };
  const minPrice = Math.min(
    ...singleProduct.markets.map((market) => market.min),
  );
  const maxPrice = Math.max(
    ...singleProduct.markets.map((market) => market.max),
  );
  const averagePrice =
    singleProduct.markets.reduce(
      (total, item) => total + (item.max + item.min) / 2,
      0,
    ) / singleProduct.markets.length;

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 mt-10">
      {/* top */}
      <div>
        <h1 className="font-semibold text-[18px] text-[#1D271F] mb-5">
          দামের সারসংক্ষেপ
        </h1>
        <div className="grid grid-cols-3 gap-5 mb-6">
          <div className="border border-gray-300 bg-white shadow-lg rounded-xl p-5">
            <h1 className="text-[16px] text-[#1D271F]">সর্বনিম্ন দাম</h1>
            <h1 className="text-[#1A9951] text-[22px] font-bold">
              {minPrice.toLocaleString("bn-BD")}{" "}
              <span className="text-[16px] text-[#1A9951]">টাকা</span>
            </h1>
            <p className="text-[16px] text-[#1D271F]">সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="border border-gray-300 bg-white shadow-lg rounded-xl p-5">
            <h1 className="text-[16px] text-[#1D271F]">সর্বাধিক দাম</h1>
            <h1 className="text-red-700 text-[22px] font-bold">
              {maxPrice.toLocaleString("bn-BD")}{" "}
              <span className="text-[16px] text-red-700">টাকা</span>
            </h1>
            <p className="text-[16px] text-[#1D271F]">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>
          <div className="border border-gray-300 bg-white shadow-lg rounded-xl p-5">
            <h1 className="text-[16px] text-[#1D271F]">গড় দাম</h1>
            <h1 className="text-[#1A9951] text-[22px] font-bold">
              {averagePrice.toLocaleString("bn-BD", {
                maximumFractionDigits: 0,
              })}{" "}
              <span className="text-[16px] text-[#1A9951]">টাকা</span>
            </h1>
            <p className="text-[16px] text-[#1D271F]">
              প্রতি <span>{unitText[singleProduct.unit]}</span>-এর হিসাবে
            </p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div>
        <h1 className="font-semibold text-[18px] text-[#1D271F] mb-6">
          বাজারভিত্তিক আজকের দাম
        </h1>
        <div className="border border-gray-300 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-sm">
              <thead className="bg-[#F0F4F0]">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold text-[#7A827B] border-b border-gray-200">
                    বাজার
                  </th>
                  <th className="px-4 py-4 text-left font-semibold text-[#7A827B] border-b border-gray-200">
                    বিভাগ
                  </th>
                  <th className="px-4 py-4 text-left font-semibold text-[#7A827B] border-b border-gray-200">
                    সর্বনিম্ন
                  </th>
                  <th className="px-4 py-4 text-left font-semibold text-[#7A827B] border-b border-gray-200">
                    সর্বাধিক
                  </th>
                  <th className="px-4 py-4 text-left font-semibold text-[#7A827B] border-b border-gray-200">
                    গড়
                  </th>
                </tr>
              </thead>
              <tbody>
                {singleProduct.markets.map((data, index) => {
                  const avg = (data.max + data.min) / 2;

                  return (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-[#F0F4F0]"}
                    >
                      <td className="text-[#1D271F] text-left px-3 py-3 border-b border-gray-200">
                        {data.market}
                      </td>

                      <td className="text-[#1D271F] text-left px-3 py-3 border-b border-gray-200">
                        {data.division}
                      </td>

                      <td className="text-[#1D271F] text-left px-3 py-3 border-b border-gray-200">
                        {data.min.toLocaleString("bn-BD")}
                      </td>

                      <td className="text-[#1D271F] text-left px-3 py-3 border-b border-gray-200">
                        {data.max.toLocaleString("bn-BD")}
                      </td>

                      <td className="text-[#1D271F] text-left px-3 py-3 border-b border-gray-200">
                        {avg.toLocaleString("bn-BD")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPriceOverview;

import { getProductList } from "@/utils/fetchData";

import Product from "@/components/Product";

export default async function Home() {

  const productList = await getProductList();

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productList?.map((product, index) => (
        <Product key={product.id} data={product} isPriority={index <= 3} />
      ))}
    </div>
  );
}

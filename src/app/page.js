import { getProductList } from "@/utils/fetchData";

import Product from "@/components/Product";

export default async function Home() {

  const productList = await getProductList();

  return (
    <div className="lg:w-1440px sm:w-486px grid grid-cols-3 gap-3">
      {productList && 
        productList.map(product => <Product key={product.id} data={product} />)
      }
    </div>
  );
}

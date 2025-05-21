import { getProductList } from "@/utils/fetchData";

import Product from "@/components/Product";

export default async function Home() {

  const productList = await getProductList();

  console.log('productList', productList);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {productList && 
          productList.map(product => <Product key={product.id} data={product} />)
        }
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          Made with tons of code
      </footer>
    </div>
  );
}

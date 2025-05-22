import { notFound } from 'next/navigation';

import Product from '@/components/Product';

import { getProductById } from "@/utils/fetchData";

const ProductPage = async ({ params }) => {
  const { id } = params;

  const productData = await getProductById(id);

  if(!productData)
    return notFound();

  return <div>
    <Product data={productData} withDetails />
  </div>

};

export default ProductPage;

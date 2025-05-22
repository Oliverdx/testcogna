import Product from "@/components/Product"

const ProductList = ({list}) => {
  return <>
   {list?.map(product =>
      <Product
        key={product.id}
        data={product}
      />
    )}
  </>
};

export default ProductList

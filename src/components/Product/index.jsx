'use client'

import { useCallback } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image";
import loadable from '@loadable/component'

const Title = loadable(() => import("@/components/Title"));
const Button = loadable(() => import("@/components/Button"));
const Price = loadable(() => import("@/components/Price"));


const Product = ({data, withDetails = false}) => {
  const router = useRouter();

  const handleAddToCart = useCallback(() => {
    alert(`Adicionando o Produto ao ${data.title} carrinho`);
  }, [data.id]);

  const handleButtonAction = useCallback((event) => {
    event.preventDefault();

    if(!withDetails)
      return router.push(`/product/${data.id}`);

    handleAddToCart();
  }, [data.id]);

  return <div>
    <section>
      <Title as={withDetails ? "h2" : "h1"}>{data.title}</Title>
      <Image
        src={data.image}
        width={500}
        height={500}
        alt={`imagem do produto ${data.title}`}
      />
      <span>{data.rating.rate} de {data.rating.count} reviews</span>
    </section>
    {withDetails && <p>{data.description}</p>}
    <Price value={data.price} />
    <Button onClick={handleButtonAction}>{withDetails ? 'Ver detalhes' : 'Adicionar ao Carrinho'}</Button>
  </div>
};

export default Product;

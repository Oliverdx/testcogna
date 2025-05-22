'use client'

import { useCallback } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image";
import loadable from '@loadable/component'

import Title from "@/components/Title";

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

  return <div className="flex flex-col items-center gap-4 p-4">
        <div className="w-[300px] h-[300px] bg-white rounded-lg flex items-center justify-center">
          <Image
            src={data.image}
            loading="lazy"
            alt={`Imagem do produto ${data.title}`}
            fill={true}
          />
        </div>

        <section className="text-sm text-zinc-500">
          <span className="font-medium">{data.rating.rate}</span> de{' '}
          <span>{data.rating.count}</span> reviews
        </section>

        <Title as={withDetails ? 'h2' : 'h1'} className="text-center text-lg font-semibold">
          {data.title}
        </Title>

        <Price value={data.price} />

        <Button
          onClick={handleButtonAction}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {withDetails ? 'Adicionar ao Carrinho' : 'Ver detalhes'}
        </Button>

        {withDetails && (
          <div className="mt-2 text-sm text-zinc-600">
            <p>{data.description}</p>
          </div>
        )}
      </div>
};

export default Product;

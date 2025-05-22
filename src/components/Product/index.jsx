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
    router.push(`/product/${data.id}`);
  }, [data.id]);

  return <div className="flex flex-col items-center gap-4 p-4">
        <div className="relative w-[250px] h-[250px] box-border bg-white rounded-lg flex items-center justify-center">
          <Image
            src={data.image}
            loading="lazy"
            alt={`Imagem do produto ${data.title}`}
            fill={true}
            objectFit="contain"
          />
        </div>

        <section className="text-sm text-zinc-500">
          <span className="font-medium">{data.rating.rate}</span> de{' '}
          <span>{data.rating.count}</span> reviews
        </section>

        <div className="flex items-center h-[60px]">
          <Title as="h2" className="text-lg text-center font-semibold">
            {data.title}
          </Title>
        </div>

        <Price value={data.price} />

        <Button
          onClick={handleButtonAction}
          className="w-full transition"
        >
         Ver detalhes
        </Button>
      </div>
};

export default Product;

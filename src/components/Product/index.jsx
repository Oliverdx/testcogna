'use client'

import { useCallback } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image";
import loadable from '@loadable/component'

import Title from "@/components/Title";

const Price = loadable(() => import("@/components/Price"));
const StarRating = loadable(() => import("@/components/StarRating"));


const Product = ({data}) => {
  const router = useRouter();

  const handleButtonAction = useCallback((event) => {
    event.preventDefault();
    router.push(`/product/${data.id}`);
  }, [data.id]);

  return <div className="flex flex-col items-center gap-4 p-4 cursor-pointer rounded hover:bg-[var(--secondary-color)] transition" onClick={handleButtonAction}>
        <div className="relative w-[250px] h-[250px] box-border bg-white rounded-lg flex items-center justify-center">
          <Image
            src={data.image}
            loading="lazy"
            alt={`Imagem do produto ${data.title}`}
            fill={true}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <StarRating rate={data.rating.rate} />

        <div className="flex items-center h-[30px]">
          <Title as="h2" className="w-[200px] text-base text-center font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            {data.title}
          </Title>
        </div>

        <Price className="text-xl" value={data.price} />
      </div>
};

export default Product;

import { notFound } from 'next/navigation';
import Image from 'next/image';


import Title from '@/components/Title';
import Price from '@/components/Price';
import Button from '@/components/Button';
import StarRating from '@/components/StarRating';

import { getProductById } from '@/utils/fetchData';

const ProductPage = async ({ params }) => {
  const { id } = await params;

  const productData = await getProductById(id);

  if (!productData) return notFound();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="w-full h-[370px] relative bg-white rounded-lg flex items-center justify-center">
          <Image
            src={productData.image}
            alt={`Imagem do produto ${productData.title}`}
            className="object-contain"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Title as="h1" className="text-3xl font-bold">
            {productData.title}
          </Title>

          <span>
            Categoria:{' '}
            <span className="font-medium capitalize">{productData.category}</span>
          </span>

          <StarRating rate={productData.rating.rate} count={productData.rating.count} />

          <Price value={productData.price} className="text-2xl my-[30px]" />

          <p>{productData.description}</p>

          <Button>
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;

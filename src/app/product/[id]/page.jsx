import { notFound } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';


import Title from '@/components/Title';
import Price from '@/components/Price';
import StarRating from '@/components/StarRating';
import AddToCartButton from '@/components/AddToCartButton';

import { getProductById } from '@/utils/fetchData';


export async function generateMetadata({ params }) {
  const product = await getProductById(params.id);

  return {
    title: `${product.title} | My Custom Shop`,
    description: product.description,
    openGraph: {
      title: `${product.title} | My Custom Shop`,
      description: product.description,
      url: `https://seusite.com/product/${product.id}`,
      siteName: 'My Custom Shop',
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: `Image of ${product.title}`,
        },
      ],
      locale: 'en_US'
    },
  };
}

const ProductPage = async ({ params }) => {
  const { id } = await params;

  const productData = await getProductById(id);

  if (!productData) return notFound();

  return (<>
    <Head>
      <title>My Custom Shop | {productData.title}</title>
      <meta property="og:title" content={`My custom Shop - ${productData.title}`} key="title" />
    </Head>
    <main className="max-w-6xl mx-auto p-6">

      <nav aria-label="page navigation">
        <Link href="/" prefetch className="px-2 py-2 my-[20px]" aria-label="Link to go gack to Homepage">
          &#8617;
          Back to Home
        </Link>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[20px]" aria-label={`Image of the product ${productData.title}`}>
        
        <div className="w-full h-[370px] relative bg-white rounded-lg flex items-center justify-center">
          <Image
            src={productData.image}
            alt={`Image of the product ${productData.title}`}
            className="object-contain"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Title as="h1" className="text-3xl font-bold" role="heading" aria-level="1">
            {productData.title}
          </Title>

          <span>
            Categoria:{' '}
            <span className="font-medium capitalize">{productData.category}</span>
          </span>

          <div role="region" aria-label={`Rating of ${productData.rating.rate} out of 5 from ${productData.rating.count} ratings`}>
            <StarRating rate={productData.rating.rate} count={productData.rating.count} />
          </div>

          <Price value={productData.price} className="text-2xl my-[30px]" />

          <p>{productData.description}</p>

          <AddToCartButton product={productData} />
        </div>
      </div>
    </main>
  </>
  );
};

export default ProductPage;

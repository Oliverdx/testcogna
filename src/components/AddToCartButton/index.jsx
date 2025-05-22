'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function AddToCartButton({ product }) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    alert(`Adding the product: ${product.title} to the cart`);
    setTimeout(() => setLoading(false), 4000);
  };

  return (
    <Button onClick={handleClick} disabled={loading} aria-label={`Add ${product.title} to the cart`}>
      {loading ? 'Adding...' : 'Add to Cart'}
    </Button>
  );
}

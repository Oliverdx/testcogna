import { render, screen, fireEvent  } from '@testing-library/react';

import Product from './index';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('Product component', () => {

  const mockData = {
    id: 1,
    title: "produto teste",
    price: 109.95,
    description: "descricao teste do produto",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  };

  it('renders product information correctly', () => {
    render(<Product data={mockData} isPriority={false} />);
    expect(screen.getByRole('heading', { name: /produto teste/i })).toBeInTheDocument();
    expect(screen.getByAltText(/imagem do produto produto teste/i)).toBeInTheDocument();
  });

  it('should click in the product and go to the product page', () => {
    render(<Product data={mockData} isPriority={false} />);
    
    const productElement = screen.getByTestId('product-link');
    fireEvent.click(productElement);

    expect(mockPush).toHaveBeenCalledWith(`/product/${mockData.id}`);
  });

});

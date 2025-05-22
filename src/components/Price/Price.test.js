import { render, screen } from '@testing-library/react';
import Price from './index';

describe('Price component', () => {
  it('renders without crashing', () => {
    render(<Price value={100} />);
    const priceElement = screen.getByText(/R\$/i);
    expect(priceElement).toBeInTheDocument();
  });

  it('renders the correct formatted price in BRL', () => {
    render(<Price value="109.95" />);
    const priceElement = screen.getByText('R$ 109,95');
    expect(priceElement).toBeInTheDocument();
  });
});

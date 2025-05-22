import { render, screen } from '@testing-library/react';
import StarRating from './index';

describe('StarRating', () => {
  test('renderiza o componente', () => {
    render(<StarRating rate={0} />);
    const container = screen.getByTestId('star-rating-container');
    expect(container).toBeInTheDocument();
  });

  test('renderiza 3 estrelas amarelas quando rate é 3', () => {
    render(<StarRating rate={3} />);
    const fullStars = document.querySelectorAll('svg[fill="#facc15"]');
    expect(fullStars.length).toBe(3);
  });
});

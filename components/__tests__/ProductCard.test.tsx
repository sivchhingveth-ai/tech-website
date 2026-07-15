import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from '../ProductCard';
import { Product } from '../../types';

const mockProduct: Product = {
  id: 'test-keyboard',
  name: 'Test Keyboard Pro',
  tagline: 'The ultimate typing experience',
  description: 'Full description of the keyboard.',
  price: 199,
  category: 'Keyboard',
  size: '75%',
  image: '/images/test.jpg',
  images: [],
  specs: {
    Layout: '75% TKL',
    Switches: 'Gateron Brown',
  },
  features: ['Hot-swappable', 'RGB Backlight'],
  rating: 4.8,
  reviews: 42,
  sales: 100,
  stock: 20,
  inStock: true,
};

describe('ProductCard', () => {
  it('renders the product card details correctly', () => {
    const handleAddToCart = vi.fn();
    const handleViewDetails = vi.fn();

    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
    );

    expect(screen.getByText('Test Keyboard Pro')).toBeInTheDocument();
    expect(screen.getByText('$199')).toBeInTheDocument();
    expect(screen.getByText('The ultimate typing experience')).toBeInTheDocument();
    expect(screen.getByText(/75%/)).toBeInTheDocument();
    expect(screen.getByText('Gateron Brown')).toBeInTheDocument();
  });

  it('renders low stock badge when stock is below 10', () => {
    const lowStockProduct = { ...mockProduct, stock: 5 };
    render(
      <ProductCard
        product={lowStockProduct}
        onAddToCart={vi.fn()}
        onViewDetails={vi.fn()}
      />
    );

    expect(screen.getByText('ONLY 5 LEFT!')).toBeInTheDocument();
  });

  it('renders out of stock badge and disables add to cart button when inStock is false', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false, stock: 0 };
    render(
      <ProductCard
        product={outOfStockProduct}
        onAddToCart={vi.fn()}
        onViewDetails={vi.fn()}
      />
    );

    expect(screen.getByText('OUT OF STOCK')).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /Out of Stock/i });
    expect(button).toBeDisabled();
  });

  it('calls onViewDetails when clicking on the card', () => {
    const handleViewDetails = vi.fn();
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={vi.fn()}
        onViewDetails={handleViewDetails}
      />
    );

    const card = screen.getByText('Test Keyboard Pro').closest('.group');
    expect(card).not.toBeNull();
    fireEvent.click(card!);
    expect(handleViewDetails).toHaveBeenCalledWith(mockProduct);
  });

  it('calls onAddToCart when clicking on Add to Cart button', () => {
    const handleAddToCart = vi.fn();
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={handleAddToCart}
        onViewDetails={vi.fn()}
      />
    );

    const button = screen.getByRole('button', { name: /Add to Cart/i });
    fireEvent.click(button);
    expect(handleAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});

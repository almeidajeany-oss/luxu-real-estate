import { render, screen } from '@testing-library/react';
import { PropertyCard } from './PropertyCard';
import { describe, it, expect } from 'vitest';

describe('PropertyCard Component', () => {
  const mockProperty = {
    title: 'The Glass Pavilion',
    location: 'Beverly Hills, California',
    price: '$5,250,000',
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    image: 'https://example.com/image.jpg',
    tag: 'Exclusive',
  };

  it('renders property basic information correctly', () => {
    render(<PropertyCard {...mockProperty} />);
    expect(screen.getByText(mockProperty.title)).toBeDefined();
    expect(screen.getByText(mockProperty.location)).toBeDefined();
    expect(screen.getByText(mockProperty.price)).toBeDefined();
  });

  it('renders property specs correctly', () => {
    render(<PropertyCard {...mockProperty} />);
    expect(screen.getByText(/5 Beds/i)).toBeDefined();
    expect(screen.getByText(/4.5 Baths/i)).toBeDefined();
    expect(screen.getByText(/4200 m²/i)).toBeDefined();
  });

  it('renders the badge tag', () => {
    render(<PropertyCard {...mockProperty} />);
    expect(screen.getByText(mockProperty.tag)).toBeDefined();
  });
});

import { render, screen } from '@testing-library/react';
import Home from './page';
import { describe, it, expect, vi } from 'vitest';

// Mock Hero component
vi.mock('@/components/Hero', () => ({
  Hero: () => <div data-testid="hero-mock">Hero Mock</div>,
}));

// Mock SearchBar component
vi.mock('@/components/SearchBar', () => ({
  SearchBar: () => <div data-testid="searchbar-mock">SearchBar Mock</div>,
}));

// Mock PropertyCard component
vi.mock('@/components/PropertyCard', () => ({
  PropertyCard: (props: { title: string }) => <div data-testid="property-card-mock">{props.title}</div>,
}));

describe('Home Page', () => {
  it('renders the Hero and SearchBar components', () => {
    render(<Home />);
    expect(screen.getByTestId('hero-mock')).toBeDefined();
    expect(screen.getByTestId('searchbar-mock')).toBeDefined();
  });

  it('renders property cards from mock data', () => {
    render(<Home />);
    const cards = screen.getAllByTestId('property-card-mock');
    expect(cards.length).toBeGreaterThan(0);
  });
});

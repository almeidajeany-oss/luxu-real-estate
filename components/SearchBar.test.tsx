import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { describe, it, expect } from 'vitest';

describe('SearchBar Component', () => {
  it('renders filter pills correctly', () => {
    render(<SearchBar />);
    expect(screen.getByText(/^All$/i)).toBeDefined();
    expect(screen.getByText(/^House$/i)).toBeDefined();
    expect(screen.getByText(/^Apartment$/i)).toBeDefined();
    expect(screen.getByText(/^Villa$/i)).toBeDefined();
    expect(screen.getByText(/^Penthouse$/i)).toBeDefined();
  });

  it('renders filter button with icon', () => {
    render(<SearchBar />);
    const filterButton = screen.getByRole('button', { name: /Filters/i });
    expect(filterButton).toBeDefined();
  });
});

import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { describe, it, expect } from 'vitest';

describe('Hero Component', () => {
  it('renders the title correctly', () => {
    render(<Hero />);
    const title = screen.getByText(/Find your/i);
    const sanctuary = screen.getByText(/sanctuary/i);
    expect(title).toBeDefined();
    expect(sanctuary).toBeDefined();
  });

  it('renders the search input with placeholder', () => {
    render(<Hero />);
    const input = screen.getByPlaceholderText(/Search by city, neighborhood, or address/i);
    expect(input).toBeDefined();
  });

  it('renders the search button', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeDefined();
  });
});

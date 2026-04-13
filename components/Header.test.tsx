import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { describe, it, expect } from 'vitest';

describe('Header Component', () => {
  it('renders the logo correctly', () => {
    render(<Header />);
    const logo = screen.getByText(/LuxeEstate/i);
    expect(logo).toBeDefined();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText(/Buy/i)).toBeDefined();
    expect(screen.getByText(/Rent/i)).toBeDefined();
    expect(screen.getByText(/Sell/i)).toBeDefined();
  });

  it('renders the profile avatar', () => {
    render(<Header />);
    const avatar = screen.getByText(/CN/i);
    expect(avatar).toBeDefined();
  });
});

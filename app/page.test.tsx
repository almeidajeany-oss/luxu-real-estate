import { render, screen } from '@testing-library/react';
import Home from './page';
import { describe, it, expect, vi } from 'vitest';

// Mock Hero component
vi.mock('@/components/Hero', () => ({
  Hero: () => <div data-testid="hero-mock">Hero Mock</div>,
}));

describe('Home Page', () => {
  it('renders the Hero component', () => {
    render(<Home />);
    const hero = screen.getByTestId('hero-mock');
    expect(hero).toBeDefined();
  });
});

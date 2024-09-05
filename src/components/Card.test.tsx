import Card from './Card';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Card component', () => {
  it('renders card with children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );

    const contentElement = screen.getByText(/card content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it('applies correct styles', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );

    const cardElement = screen.getByText(/card content/i).parentElement;
    expect(cardElement).toHaveClass('inline-block rounded-lg border border-slate-300 bg-white p-8');
  });
});

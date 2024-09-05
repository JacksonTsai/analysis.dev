import Button from './Button';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('Button component', () => {
  it('renders button with label', () => {
    render(<Button label="Click" cb={() => {}} />);

    const buttonElement = screen.getByText(/click/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls callback function when clicked and button is not disabled', () => {
    const mockCallback = vi.fn();
    render(<Button label="Click" cb={mockCallback} disabled={false} />);

    const buttonElement = screen.getByText(/click/i);
    fireEvent.click(buttonElement);
    expect(mockCallback).toHaveBeenCalled();
  });

  it('does not call callback function when button is disabled', () => {
    const mockCallback = vi.fn();
    render(<Button label="Click" cb={mockCallback} disabled={true} />);

    const buttonElement = screen.getByText(/click/i);
    fireEvent.click(buttonElement);
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('applies correct button type', () => {
    render(<Button label="Submit" cb={() => {}} type="submit" />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});

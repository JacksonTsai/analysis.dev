import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './SideBar';
import { describe, it, expect } from 'vitest';

describe('Sidebar component', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Sidebar />
      </MemoryRouter>
    );

    expect(screen.getByText(/today's weather/i)).toBeInTheDocument();
    expect(screen.getByText(/population/i)).toBeInTheDocument();
  });

  it('highlights active link based on current pathname', () => {
    render(
      <MemoryRouter initialEntries={['/today-weather']}>
        <Sidebar />
      </MemoryRouter>
    );

    expect(screen.getByText(/today's weather/i).closest('li')).toHaveClass(
      'border-r-4 border-solid border-r-navy-blue bg-slate-200'
    );
    expect(screen.getByText(/population/i).closest('li')).not.toHaveClass(
      'border-r-4 border-solid border-r-navy-blue bg-slate-200'
    );
  });
});

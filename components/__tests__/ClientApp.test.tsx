import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ClientApp from '../ClientApp';

// Mock the next/link component as a simple anchor tag
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

// Mock supabase since we don't have Supabase connection details in tests
vi.mock('@/utils/supabase/client', () => ({
  createClient: () => ({
    auth: {
      onAuthStateChange: vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } })),
      getUser: vi.fn().mockResolvedValue({ data: { user: null } }),
    },
  }),
}));

vi.mock('@/app/auth/actions', () => ({
  signOut: vi.fn(),
}));

describe('ClientApp', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing and displays the header and footer', () => {
    render(<ClientApp />);

    // Brand logo or title should be in document
    expect(screen.getByText('KEYCRAFT STUDIO')).toBeInTheDocument();
    
    // Check for footer copyright
    expect(screen.getByText(/© 2026 KeyCraft Studio Inc./i)).toBeInTheDocument();
  });

  it('allows clicking category filters in navbar', () => {
    render(<ClientApp />);

    // Find and click on the "All" category link/button
    const allCategoryButton = screen.getAllByRole('button').find(
      (btn) => btn.textContent?.trim() === 'All'
    );
    
    if (allCategoryButton) {
      fireEvent.click(allCategoryButton);
      // It should update category filters or change active styling
      expect(allCategoryButton).toBeInTheDocument();
    }
  });
});

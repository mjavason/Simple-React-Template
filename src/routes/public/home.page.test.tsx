// @vitest-environment jsdom

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from './home.page';

describe('HomePage', () => {
  it('renders the home page content', () => {
    render(<HomePage />);

    expect(screen.getByText('Hello')).toBeTruthy();
    expect(screen.getByRole('button', { name: /click me/i })).toBeTruthy();
  });
});

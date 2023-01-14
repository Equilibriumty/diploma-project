import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import renderWithRouter from './util';

describe('App', () => {
  it('Should render app', () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByText('Auth page'));
  });

  it('Should redirect to main page', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    expect(screen.getByText('Auth page'));
    await user.click(screen.getByTestId('redirect'));
    expect(screen.getByTestId('button_1')).toBeInTheDocument();
  });
});

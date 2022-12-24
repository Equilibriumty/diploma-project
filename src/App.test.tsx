import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Should rended app', () => {
    render(<App />);
    expect(screen.getByText('Vite + React'));
  });
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('valida se app esta sendo renderizado', () => {
  render(<App />);
  expect(screen.getByText(/Cronômetro/i)).toBeInTheDocument()
  expect(screen.getByText(/Produzido por/i)).toBeInTheDocument()
});

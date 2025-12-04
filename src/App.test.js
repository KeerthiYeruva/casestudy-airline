import { render, screen } from '@testing-library/react';
import App from './App';

test('renders airline management system', () => {
  render(<App />);
  const headingElement = screen.getByText(/Airline Management System/i);
  expect(headingElement).toBeInTheDocument();
});

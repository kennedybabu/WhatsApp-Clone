import { render, screen } from '@testing-library/react';
import Input from './Input';

test('renders text input', () => {
  render(<Input />);
  const textInput = screen.getByPlaceholderText(/type a message/i);
  expect(textInput).toBeInTheDocument();
});

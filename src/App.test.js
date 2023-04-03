import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders Fizz Buzz App heading', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/Fizz Buzz App/);
    expect(heading).toBeInTheDocument();
  });

  test('displays Fizz Buzz sequence when number is entered', () => {
    const { getByLabelText, getByText } = render(<App />);
    const input = getByLabelText(/Please enter a number/);
    fireEvent.change(input, { target: { value: '15' } });
    const output = getByText(/1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz Fizz 14 FizzBuzz/);
    expect(output).toBeInTheDocument();
  });
  
});

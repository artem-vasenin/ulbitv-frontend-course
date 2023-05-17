import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App', () => {
  test('renders react title', () => {
    render(<App />);
    const titleElement = screen.getByText(/hello rusich/i);
    const btnElement = screen.getByRole('button');
    const inputElement = screen.getByPlaceholderText(/password/i);
    expect(titleElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toMatchSnapshot();
  });
});

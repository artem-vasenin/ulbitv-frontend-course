import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('It has on page', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('aside')).toBeInTheDocument();
  });
  test('Test toggle', () => {
    render(<Sidebar />);
    const btn = screen.getByTestId('aside-button');
    fireEvent.click(btn);
    expect(screen.getByTestId('aside')).toHaveClass('collapsed');
  });
});

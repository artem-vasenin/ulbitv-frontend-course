import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('Test App', () => {
  test('Проверка наличия элементов на странице', () => {
    render(<App />);
    const title = screen.getByTestId('title');
    const btn = screen.getByTestId('button');
    const input = screen.getByTestId('input');
    expect(title).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  test('Проверка нажатия кнопки и появление элемнета toggle', () => {
    render(<App />);
    const btn = screen.getByTestId('button');
    expect(screen.queryByTestId('toggle')).toBeNull();
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle')).toBeNull();
  });
  test('проверка инпута', () => {
    render(<App />);
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(screen.getByTestId('text')).toContainHTML('');
    // fireEvent.input(input, { target: { value: 'some text' } });
    userEvent.type(input, 'some text');
    expect(screen.getByTestId('text')).toContainHTML('some text2');
  });
});

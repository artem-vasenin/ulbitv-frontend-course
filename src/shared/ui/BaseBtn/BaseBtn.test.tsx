import { render, screen } from '@testing-library/react';
import { BaseBtn, ThemeButton } from 'shared/ui/BaseBtn/BaseBtn';

describe('BaseBtn', () => {
  test('It has on page', () => {
    render(<BaseBtn>Test</BaseBtn>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('Clear btn', () => {
    render(<BaseBtn theme={ThemeButton.CLEAR}>Test</BaseBtn>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});

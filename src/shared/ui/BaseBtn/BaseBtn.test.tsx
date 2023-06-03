import { render, screen } from '@testing-library/react';
import { BaseBtn } from 'shared/ui/BaseBtn/BaseBtn';

describe('BaseBtn', () => {
  test('It has on page', () => {
    render(<BaseBtn>Test</BaseBtn>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

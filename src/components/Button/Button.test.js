import { render, fireEvent } from '@testing-library/react';
import { PrimaryButton, SecondaryButton, IconButton } from './Button';

describe('Button Components', () => {
  test('PrimaryButton renders correctly', () => {
    const { getByText } = render(<PrimaryButton>Test</PrimaryButton>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  test('SecondaryButton handles click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <SecondaryButton onClick={handleClick}>Click Me</SecondaryButton>
    );
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('IconButton requires aria-label', () => {
    const { container } = render(
      <IconButton aria-label="Close">×</IconButton>
    );
    expect(container.firstChild).toHaveAttribute('aria-label', 'Close');
  });
});

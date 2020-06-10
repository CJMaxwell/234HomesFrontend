import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Counter from '../components/Counter';

describe('should render the counter component', () => {
  afterEach(cleanup);
  test('should render a div with testId of count', () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('count')).toHaveTextContent('0');
  });
  test('should increase when the increment button is clicked', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('increase'));
    expect(getByTestId('count')).toHaveTextContent('1');
  });
  test('should increase when the decrement button is clicked', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('decrease'));
    expect(getByTestId('count')).toHaveTextContent('-1');
  });
});

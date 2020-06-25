import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('contains my name', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Nicholas Rose/i);
    expect(linkElement).toBeInTheDocument();
});

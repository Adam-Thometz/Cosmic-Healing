import React from 'react';
import App from './App';
import renderWithBrowser from './_test/renderWithBrowser';

test('renders App', () => {
  renderWithBrowser(<App />);
});

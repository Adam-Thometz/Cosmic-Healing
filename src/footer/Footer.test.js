import React from "react";
import renderWithBrowser from '../_test/renderWithBrowser';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    renderWithBrowser(<Footer />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithBrowser(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
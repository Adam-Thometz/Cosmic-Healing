import React from "react";
import renderWithBrowser from '../_test/renderWithBrowser';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('renders without crashing', () => {
    renderWithBrowser(<Navbar />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithBrowser(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
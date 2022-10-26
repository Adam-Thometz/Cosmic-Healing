import React from "react";
import renderWithBrowser from '../_test/renderWithBrowser';
import NavbarResponsive from './NavbarResponsive';

describe('NavbarResponsive component', () => {
  it('renders without crashing', () => {
    renderWithBrowser(<NavbarResponsive />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithBrowser(<NavbarResponsive />);
    expect(asFragment()).toMatchSnapshot();
  });
});
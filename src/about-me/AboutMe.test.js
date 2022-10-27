import React from "react";
import renderWithBrowser from '../_test/renderWithBrowser';
import AboutMe from './AboutMe';

describe('AboutMe component', () => {
  it('renders without crashing', () => {
    renderWithBrowser(<AboutMe />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = renderWithBrowser(<AboutMe />);
    expect(asFragment()).toMatchSnapshot();
  });
});
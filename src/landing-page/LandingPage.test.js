import React from "react";
import { render } from "@testing-library/react";
import LandingPage from './LandingPage';

describe('LandingPage component', () => {
  it('renders without crashing', () => {
    render(<LandingPage />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<LandingPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
import React from "react";
import { render } from "@testing-library/react";
import HowItWorks from './HowItWorks';

describe('HowItWorks component', () => {
  it('renders without crashing', () => {
    render(<HowItWorks />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<HowItWorks />);
    expect(asFragment()).toMatchSnapshot();
  });
});
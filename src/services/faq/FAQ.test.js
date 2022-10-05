import React from "react";
import { render } from "@testing-library/react";
import FAQ from './FAQ';

describe('FAQ component', () => {
  it('renders without crashing', () => {
    render(<FAQ />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<FAQ />);
    expect(asFragment()).toMatchSnapshot();
  });
});
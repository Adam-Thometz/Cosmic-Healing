import React from "react";
import { render } from "@testing-library/react";
import Services from './Services';

describe('Services component', () => {
  it('renders without crashing', () => {
    render(<Services />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Services />);
    expect(asFragment()).toMatchSnapshot();
  });
});
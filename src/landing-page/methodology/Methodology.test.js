import React from "react";
import { render } from "@testing-library/react";
import Methodology from './Methodology';

describe('Methodology component', () => {
  it('renders without crashing', () => {
    render(<Methodology />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Methodology />);
    expect(asFragment()).toMatchSnapshot();
  });
});
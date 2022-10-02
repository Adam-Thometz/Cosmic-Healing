import React from "react";
import { render } from "@testing-library/react";
import Affiliates from './Affiliates';

describe('Affiliates component', () => {
  it('renders without crashing', () => {
    render(<Affiliates />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Affiliates />);
    expect(asFragment()).toMatchSnapshot();
  });
});
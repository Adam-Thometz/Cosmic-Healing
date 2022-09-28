import React from "react";
import { render } from "@testing-library/react";
import CanHelpWith from './CanHelpWith';

describe('CanHelpWith component', () => {
  it('renders without crashing', () => {
    render(<CanHelpWith />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<CanHelpWith />);
    expect(asFragment()).toMatchSnapshot();
  });
});
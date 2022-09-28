import React from "react";
import { render } from "@testing-library/react";
import SectionHeader from './SectionHeader';

describe('SectionHeader component', () => {
  it('renders without crashing', () => {
    render(<SectionHeader />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<SectionHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
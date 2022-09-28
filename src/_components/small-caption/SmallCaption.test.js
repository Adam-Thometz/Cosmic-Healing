import React from "react";
import { render } from "@testing-library/react";
import SmallCaption from './SmallCaption';

describe('SmallCaption component', () => {
  it('renders without crashing', () => {
    render(<SmallCaption />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<SmallCaption />);
    expect(asFragment()).toMatchSnapshot();
  });
});
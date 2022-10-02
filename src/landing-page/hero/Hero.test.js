import React from "react";
import { render } from "@testing-library/react";
import Hero from './Hero';

describe('Hero component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
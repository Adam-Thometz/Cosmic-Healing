import React from "react";
import { render } from "@testing-library/react";
import Button from './Button';

describe('Button component', () => {
  it('renders without crashing', () => {
    render(<Button>Hello, I'm a button</Button>);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Button>Hello, I'm a button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
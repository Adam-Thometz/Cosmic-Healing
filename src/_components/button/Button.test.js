import React from "react";
import { render } from "@testing-library/react";
import Button from './Button';

describe('Button component', () => {
  const component = <Button primary>Hello, I'm a primary button</Button>;
  const component2 = <Button>Hello, I'm a regular button</Button>;
  it('renders without crashing', () => {
    render(component);
  });

  it('matches the snapshot for primary button', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches the snapshot for secondary button', () => {
    const { asFragment } = render(component2);
    expect(asFragment()).toMatchSnapshot();
  });

});
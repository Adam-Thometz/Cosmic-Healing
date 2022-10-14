import React from "react";
import { render } from "@testing-library/react";
import Link from './Link';

describe('Link component', () => {
  const component = <Link primary>Hello, I'm a primary link</Link>;
  const component2 = <Link>Hello, I'm a regular link</Link>;
  it('renders without crashing', () => {
    render(component);
  });

  it('matches the snapshot for primary link', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches the snapshot for secondary link', () => {
    const { asFragment } = render(component2);
    expect(asFragment()).toMatchSnapshot();
  });
});
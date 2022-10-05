import React from "react";
import { render } from "@testing-library/react";
import ServiceInfo from './ServiceInfo';

describe('ServiceInfo component', () => {
  it('renders without crashing', () => {
    render(<ServiceInfo />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<ServiceInfo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
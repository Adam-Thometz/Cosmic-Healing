import React from "react";
import { render } from "@testing-library/react";
import ServiceDescription from './ServiceDescription';

describe('ServiceDescription component', () => {
  const serviceComponent = <ServiceDescription
    name='Software Testing'
    description="I love testing so much"
    image='pic of guy just testing software'
    i={0}
  />
  it('renders without crashing', () => {
    render(serviceComponent);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(serviceComponent);
    expect(asFragment()).toMatchSnapshot();
  });
});
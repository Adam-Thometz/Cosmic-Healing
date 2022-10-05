import React from "react";
import { render } from "@testing-library/react";
import ServiceCard from './ServiceCard';

import options from '../serviceOptions'

describe('ServiceCard component', () => {
  const { service, description, link } = options[0]
  const component = <ServiceCard
    service={service}
    description={description}
    link={link}
  />;
  it('renders without crashing', () => {
    render(component);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });
});
import React from "react";
import { render } from "@testing-library/react";
import ServiceCard from './ServiceCard';

import options from '../serviceOptions'

describe('ServiceCard component', () => {
  const { service, description, link } = options[0]
  it('renders without crashing', () => {
    render(<ServiceCard
      service={service}
      description={description}
      link={link}
    />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<ServiceCard
      service={service}
      description={description}
      link={link}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
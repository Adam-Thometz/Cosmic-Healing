import React from "react";
import { render } from "@testing-library/react";
import Method from './Method';

import methods from '../methods';

describe('Method component', () => {
  const { name, img, description } = methods[0];
  const component = <Method
    name={name}
    img={img}
    description={description}
  />
  it('renders without crashing', () => {
    render(component);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });
});
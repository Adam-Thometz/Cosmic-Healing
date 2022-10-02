import React from "react";
import { render } from "@testing-library/react";
import Method from './Method';

import methods from '../methods';

describe('Method component', () => {
  const { name, img, description } = methods[0]
  it('renders without crashing', () => {
    render(<Method
      name={name}
      img={img}
      description={description}
    />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Method
      name={name}
      img={img}
      description={description}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
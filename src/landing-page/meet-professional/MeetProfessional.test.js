import React from "react";
import { render } from "@testing-library/react";
import MeetProfessional from './MeetProfessional';

describe('MeetProfessional component', () => {
  it('renders without crashing', () => {
    render(<MeetProfessional />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<MeetProfessional />);
    expect(asFragment()).toMatchSnapshot();
  });
});
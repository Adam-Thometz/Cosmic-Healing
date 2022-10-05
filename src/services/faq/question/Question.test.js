import React from "react";
import { render } from "@testing-library/react";
import Question from './Question';

describe('Question component', () => {
  const component = <Question
    question="What did the irritated test say?"
    answer="Don't test me"
  />;
  it('renders without crashing', () => {
    render(component);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });
});
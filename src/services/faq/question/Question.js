import React from 'react';

import SectionHeader from '../../../_components/section-header/SectionHeader';

import './Question.css';

const Question = ({ question, answer }) => {
  return (
    <details className='Question'>
      <summary className='Question-question-wrapper'>
        <span className='Question-question'><SectionHeader small text={question}/></span>
      </summary>
      <p className='Question-answer'>{answer}</p>
    </details>
  );
};

export default Question;
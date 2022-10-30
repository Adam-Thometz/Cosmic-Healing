import React from 'react';

import SectionHeader from '../../../_components/section-header/SectionHeader';

import './Question.css';

import plus from '../../../_media/services/expanded.png';
import minus from '../../../_media/services/collapsed.png';

const Question = ({ id, question, answer, isShowing, handleShowing }) => { 
  const handleKeyPress = e => {
    if (e.key === 'Enter' || e.key === 'Space') handleShowing();
  } 
  return (
    <div className='Question' id={id} onClick={handleShowing}>
      <div className='Question-question-wrapper'>
        <SectionHeader small text={question} />
        <img
          role='button'
          onKeyUp={handleKeyPress}
          src={isShowing ? minus : plus}
          alt={`Pick to ${isShowing ? 'collapse' : 'expand'} question`} tabIndex={0} />
      </div>
      <p className={`Question-answer${isShowing ? ' showing' : ''}`}>{answer}</p>
    </div>
  );
};

export default Question;
import React, { useState } from 'react';

import SectionHeader from '../../../_components/section-header/SectionHeader';

import './Question.css';

import plus from '../../../_media/services/expanded.png';
import minus from '../../../_media/services/collapsed.png';

const Question = ({ question, answer }) => {
  const [isShowing, setIsShowing] = useState(false);
  const handleShowing = () => {
    setIsShowing(showing => !showing)  
  };
  return (
    // <details className='Question'>
    //   <summary className='Question-question-wrapper'>
    //     <span className='Question-question'><SectionHeader small text={question}/></span>
    //   </summary>
    //   <p className='Question-answer'>{answer}</p>
    // </details>
    <div className='Question' onClick={handleShowing}>
      <div className='Question-question-wrapper'>
        <SectionHeader small text={question} />
        <img src={isShowing ? minus : plus} alt={`Pick to ${isShowing ? 'collapse' : 'expand'} question`} />
      </div>
      {isShowing ? <p className='Question-answer'>{answer}</p> : null}
    </div>
  );
};

export default Question;
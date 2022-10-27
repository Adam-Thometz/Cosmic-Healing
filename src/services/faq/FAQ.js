import React, { useState } from 'react';

import './FAQ.css';

import SectionHeader from '../../_components/section-header/SectionHeader';
import SmallCaption from '../../_components/small-caption/SmallCaption';
import Question from './question/Question';

import questionsAnswers from './questionsAnswers';

const FAQ = () => {
  const [currQuestion, setCurrQuestion] = useState(null);
  const faq = questionsAnswers.map(({ question, answer }, i) => {
    const handleShowing = () => currQuestion === i 
      ? setCurrQuestion(null)
      : setCurrQuestion(i);
    return <Question
      id={i}
      question={question}
      answer={answer}
      isShowing={i === currQuestion}
      handleShowing={handleShowing}
    />;
  });
  
  return (
    <section className='FAQ' id='faq'>
      <SmallCaption text="FAQ" />
      <SectionHeader text="Frequently Asked Questions" />
      {faq}
    </section>
  );
};

export default FAQ;
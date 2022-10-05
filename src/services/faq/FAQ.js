import React from 'react';

import SectionHeader from '../../_components/section-header/SectionHeader';
import SmallCaption from '../../_components/small-caption/SmallCaption';
import Question from './question/Question';

import questionsAnswers from './questionsAnswers';

const FAQ = () => {
  const faq = questionsAnswers.map(({ question, answer }) => (
    <Question question={question} answer={answer} />
  ));
  
  return (
    <section className='FAQ'>
      <SmallCaption text="FAQ" />
      <SectionHeader text="Frequently Asked Questions" />
      {faq}
    </section>
  );
};

export default FAQ;
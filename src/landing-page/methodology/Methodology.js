import React from 'react';

import './Methodology.css';

import Method from './method-card/Method';
import SectionHeader from '../../_components/section-header/SectionHeader';
import SmallCaption from '../../_components/small-caption/SmallCaption';

import methods from './methods';

const Methodology = () => {
  return (
    <section className='Methodology'>
      <SmallCaption text="HOW I CAN HELP.." />
      <SectionHeader text="My Process" />
      <div className='Methodology-methods'>
        {methods.map(m => <Method
          name={m.name}
          img={m.img}
          description={m.description}
        />)}
      </div>
    </section>
  );
};

export default Methodology;
import React from 'react';

import Hero from './hero/Hero';
import MeetProfessional from './meet-professional/MeetProfessional';
import CanHelpWith from './can-help-with/CanHelpWith';
import Methodology from './methodology/Methodology';
import Services from './services/Services';
import HowItWorks from './how-it-works/HowItWorks';
import Affiliates from './affiliates/Affiliates';

const LandingPage = () => {
  return (
    <main className='LandingPage'>
      <Hero />
      <MeetProfessional />
      <CanHelpWith />
      <Methodology />
      <Services />
      <HowItWorks />
      <Affiliates />
    </main>
  );
};

export default LandingPage;
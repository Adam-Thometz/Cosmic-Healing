import React from 'react';

import Hero from './hero/Hero';
import MeetProfessional from './meet-professional/MeetProfessional';
import CanHelpWith from './can-help-with/CanHelpWith';
import Methodology from './methodology/Methodology';
import ServiceInfo from './services-info/ServiceInfo';
import HowItWorks from './how-it-works/HowItWorks';
import Affiliates from './affiliates/Affiliates';

const LandingPage = () => {
  return (
    <main className='LandingPage'>
      <Hero />
      <MeetProfessional />
      <CanHelpWith />
      <Methodology />
      <ServiceInfo />
      <HowItWorks />
      <Affiliates />
    </main>
  );
};

export default LandingPage;
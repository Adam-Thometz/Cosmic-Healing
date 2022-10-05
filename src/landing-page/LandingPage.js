import React from 'react';

import './LandingPage.css';

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
      <Hero style={{ "--i": 1 }} />
      <MeetProfessional style={{ "--i": 2 }} />
      <CanHelpWith style={{ "--i": 3 }} />
      <Methodology style={{ "--i": 4 }} />
      <ServiceInfo style={{ "--i": 5 }} />
      <HowItWorks style={{ "--i": 6 }} />
      <Affiliates style={{ "--i": 7 }} />
    </main>
  );
};

export default LandingPage;
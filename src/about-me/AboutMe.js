import React from 'react';

import './AboutMe.css';

import SectionHeader from '../_components/section-header/SectionHeader';
import SmallCaption from '../_components/small-caption/SmallCaption';

import miriam from '../_media/miriam.png'
import hand1 from '../_media/about-me/hand-puzzle1.png';
import hand2 from '../_media/about-me/hand-puzzle2.png';
import Link from '../_components/link/Link';

const AboutMe = () => {
  return (
    <main className='AboutMe'>
      <div className='AboutMe-img-wrapper'>
        <img src={miriam} alt='' />
      </div>
      <SmallCaption text='Meet the Licenced Professional' />
      <SectionHeader text='Hello, my name is Miriam!' />
      <section className='AboutMe-about'>
        <aside className='AboutMe-about-img'>
          <img src={hand1} alt='' />
        </aside>
        <article className='AboutMe-about-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum luctus nisl tortor eu nec malesuada varius vestibulum vel. Rutrum leo elementum, in a nunc gravida. Sit cursus semper id massa a vitae ut lectus. Hac tortor ut pellentesque rhoncus pulvinar integer ipsum. In lorem amet sed arcu quis lacinia sagittis viverra parturient.
          <br />
          <br />
          Placerat dictum montes, sociis tristique enim, sapien nisl dui faucibus. Porttitor faucibus nisi, urna amet, morbi ultrices erat orci nibh. Venenatis, cursus sit sed cursus eu id sit. Sagittis aliquet sit odio vestibulum diam venenatis sed. Turpis penatibus nunc ornare vel aliquam mattis volutpat fermentum risus. Egestas gravida feugiat tellus aliquet turpis pellentesque id pellentesque. Vel dignissim faucibus orci, et magnis in pharetra aenean. Tempus massa et urna, sagittis lacus, sit. Suspendisse mauris, leo ornare tellus commodo vitae.
          <br />
          <br />
          Miriam Nkrumah has trained and worked in various settings, including schools, medical centers and hospitals.
        </article>
      </section>
      <blockquote className='AboutMe-quote'>“I offer sessions designed to help you shift subconscious imprinting, uncover your authentic self, align with your purpose, and live in the present moment.”</blockquote>
      <section className='AboutMe-specialties'>
        <div className='AboutMe-specialties-wrapper'>
          <SmallCaption text='Journey Within' />
          <SectionHeader text='Therapy Specialty' />
          <ul className='AboutMe-specialties-list'>
            <li>Depression</li>
            <li>Grief and Loss</li>
            <li>Life Transitions</li>
            <li>Personal Growth and Self-Esteem</li>
            <li>General relationship challenges (family, friends, co-workers)</li>
          </ul>
          <Link primary ariaLabel='Click to book a free session'>Book a free session</Link>
        </div>
        <aside className='AboutMe-specialties-img'>
          <img src={hand2} alt='' />
        </aside>
      </section>
    </main>
  );
};

export default AboutMe;
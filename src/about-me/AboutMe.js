import React from 'react';

import SectionHeader from '../_components/section-header/SectionHeader';
import SmallCaption from '../_components/small-caption/SmallCaption';

import hand1 from '../_media/about-me/hand-puzzle1.png';
import hand2 from '../_media/about-me/hand-puzzle2.png';

const AboutMe = () => {
  return (
    <main className='AboutMe'>
      <SmallCaption text='Meet the Licenced Professional' />
      <SectionHeader text='Hello, my name is Miriam!' />
      <section>
        <aside className='AboutMe-img-wrapper'>
          <img src={hand1} alt='' />
        </aside>
        <article className='AboutMe-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum luctus nisl tortor eu nec malesuada varius vestibulum vel. Rutrum leo elementum, in a nunc gravida. Sit cursus semper id massa a vitae ut lectus. Hac tortor ut pellentesque rhoncus pulvinar integer ipsum. In lorem amet sed arcu quis lacinia sagittis viverra parturient.
        <br />
        <br />
        Placerat dictum montes, sociis tristique enim, sapien nisl dui faucibus. Porttitor faucibus nisi, urna amet, morbi ultrices erat orci nibh. Venenatis, cursus sit sed cursus eu id sit. Sagittis aliquet sit odio vestibulum diam venenatis sed. Turpis penatibus nunc ornare vel aliquam mattis volutpat fermentum risus. Egestas gravida feugiat tellus aliquet turpis pellentesque id pellentesque. Vel dignissim faucibus orci, et magnis in pharetra aenean. Tempus massa et urna, sagittis lacus, sit. Suspendisse mauris, leo ornare tellus commodo vitae.
        <br />
        <br />
        Miriam Nkrumah has trained and worked in various settings, including schools, medical centers and hospitals.</article>
      </section>
      <blockquote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum luctus nisl tortor eu nec malesuada varius vestibulum vel.”</blockquote>
      <section>
        <SmallCaption text='Journey Within' />
        <SectionHeader text='Therapy Specialty' />
        <ul>
          <li>Specialty</li>
          <li>Another specialty</li>
          <li>Yes, another specialty</li>
        </ul>
        <aside className='AboutMe-img-wrapper'>
          <img src={hand2} alt='' />
        </aside>
      </section>
    </main>
  )
}

export default AboutMe
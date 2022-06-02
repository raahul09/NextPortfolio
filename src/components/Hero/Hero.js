import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { SectionSubText, ButtonBack } from './../../styles/GlobalComponents/index';

const Hero = (props) => (
<section row nopadding>
  <LeftSection>
    <SectionTitle main center className='w-100 flex-wrap'>
    Hello! I’m Rahul<br/> I am Frontend Developer. 
    </SectionTitle>
    <SectionSubText className='mb-10 w-3/4 capitalize'>
    Passionate Frontend Web Developer to build all aspects of the user experience and user interface for client-facing landing pages.
    </SectionSubText>
    <Button href="//drive.google.com/file/d/1J1sQdwjZS-2zfWjue-oJkcylleRayvI5/view?usp=sharing">Learn More<span>🚀</span></Button>
  </LeftSection>
</section>
);

export default Hero;
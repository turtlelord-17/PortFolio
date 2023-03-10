import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there, <br/>
        This is Rohith Nemali
      </SectionTitle>
      <SectionText>
        I'm a Full Stack MERN Developer with expertise in building end to end websites
      </SectionText>
      <Button onClick={()=>window.location='https://www.linkedin.com/in/rohithnemali/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
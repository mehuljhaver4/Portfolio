import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br />
        Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
        Actively looking for New Grad Software Development / Machine Learning Engineer roles starting Summer/Fall 2023.
      </SectionText>
      <Button onClick = {() => window.open('https://uflorida-my.sharepoint.com/personal/mehuljhaver_ufl_edu/Documents/Important%20Documents/Resume/Mehul_Jhaver.pdf', '_blank')}>Resume</Button>
    </LeftSection>
  </Section>
);
export default Hero;
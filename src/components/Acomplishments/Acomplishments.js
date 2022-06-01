import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Website landing'},
  { number: 100, text: 'AB testing test Created', },
  { number: 20, text: 'Self Learning Projects', },
  // { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
   <SectionTitle>Perosonal Accomplishment</SectionTitle>
  <Boxes>
    {data.map((card,index)=>(
      <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}    
  </Boxes>
  
  </Section>
);

export default Acomplishments;

import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id='tech'>
<SectionDivider style={{marginBottom:'20px'}}/>
<SectionTitle>Technologies</SectionTitle>
<SectionText>
  I've worked with a Range of Technologies🚀 in <span ClassName="decoration-slice">Web Development world.</span>
  For both Frontend & backend to Design  
</SectionText>
<List>
  <ListItem>
    <DiReact size={"3rem"} />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Exprience with <br />React.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size={"3rem"} />
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Exprience with <br />Node.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiZend size={"3rem"} />
    <ListContainer>
      <ListTitle>UX/UI</ListTitle>
      <ListParagraph>
        Exprience with <br />Figma
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
</Section>
);

export default Technologies;

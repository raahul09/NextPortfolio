import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Modal from '../../styles/GlobalComponents/Modal';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, CardWrapper, ImageArea, InnerArea, Innerimg, Shape, Shape2} from './TechnologiesStyles';

function Technologies() {
  const [isShown, setIsShown] = useState(false);
  return(
    <Section id='tech'>
    <SectionDivider style={{ marginBottom: '20px' }} />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a Range of Technologies🚀 in <span ClassName="decoration-slice">Web Development world.</span>
      For both Frontend & backend to Design
    </SectionText>
    <List>
      <ListItem  onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        <CardWrapper>
          <Shape></Shape>
          <ImageArea> <DiReact size={"3rem"} /></ImageArea>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Exprience with <br />React.js
            </ListParagraph>
          </ListContainer>
          <Shape></Shape>
        </CardWrapper>
      </ListItem>
      <ListItem>
        <CardWrapper>
          <Shape2></Shape2>
          <ImageArea> <DiFirebase size={"3rem"} /></ImageArea>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
            <FontAwesomeIcon icon="fa-regular fa-0" />
              Exprience with <br /> Node.js
            </ListParagraph>
          </ListContainer>
          <Shape></Shape>
        </CardWrapper>
      </ListItem>
      <ListItem>
        <CardWrapper>
          <Shape></Shape>
          <ImageArea><DiZend size={"3rem"} /></ImageArea>
          <ListContainer>
            <ListTitle>UX/UI</ListTitle>
            <ListParagraph>
              Exprience with <br />Figma
            </ListParagraph>
          </ListContainer>
          <Shape></Shape>
        </CardWrapper>
      </ListItem>
    </List>
  </Section>
  )
}


export default Technologies;

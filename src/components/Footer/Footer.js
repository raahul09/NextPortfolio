import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>Call
        <LinkItem href="tel:+918103684321">8103684321</LinkItem>
        </LinkColumn>
        <LinkColumn>Email
        <LinkItem href="mailto:raahul09786@gmail.com">raahul09786@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating One Project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https//github.com'>
            <AiFillGithub size={"3rem"}></AiFillGithub>
          </SocialIcons>
          <SocialIcons href='https//linkedin.com'>
            <AiFillLinkedin size={"3rem"}></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons href='https//instagram.com'>
            <AiFillInstagram size={"3rem"}></AiFillInstagram>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

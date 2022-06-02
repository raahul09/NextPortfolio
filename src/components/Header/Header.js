import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3,Span, NavLink, SocialIcons } from './HeaderStyles';
import { SocialIconsContainer } from './../Footer/FooterStyles';

const Header = () =>  (
<Container className='justify-center'>
  <Div1 className='justify-center'>
    <Link href="/" >
      <a className='flex items-center text-white' >
       <DiCssdeck size={"4rem"} /><Span>PortFolio</Span>
      </a>
    </Link>
  </Div1>
  <Div2 className='items-center'>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
        <SocialIcons href="https://github.com/raahul09">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/raahul09/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
</Container>
);

export default Header;

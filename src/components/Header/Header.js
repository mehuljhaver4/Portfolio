import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import NavDropDown from '../NavDropDown';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href = "/">
        <a style = {{display: "flex", alignItems: "center", color: 'white', marginBottom: 20}}>
          <DiCssdeck size = "3rem" /> <Span> Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href = "/resume/Mehul_Jhaver.pdf" target = "_blank">
          <NavLink>Resume</NavLink>
        </Link>
      </li> */}
    </Div2>
    <Div3>
      <SocialIcons href = "https://github.com/mehuljhaver4" target="_blank">
        <AiFillGithub size = "4rem"/>
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/in/mehul-jhaver/" target="_blank">
        <AiFillLinkedin size = "4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

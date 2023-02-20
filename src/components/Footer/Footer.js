import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    
    <FooterWrapper id = 'contact'>
      <SectionTitle>Contact me anytime!</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href = "tel: +1 (352)-888-3378"> +1 (352)-888-3378</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email (University)</LinkTitle>
          <LinkItem href = "mailto:mehuljhaver@ufl.edu">mehuljhaver@ufl.edu</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email (Personal)</LinkTitle>
          <LinkItem href = "mailto:mehuljhaver@gmail.com">mehuljhaver@gmail.com</LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"Learning never exhausts the mind." - Leonardo da Vinci</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href = "https://github.com/mehuljhaver4" target="_blank">
          <AiFillGithub size = "4rem"/>
          </SocialIcons>
          <SocialIcons href = "https://www.linkedin.com/in/mehul-jhaver/" target="_blank">
          <AiFillLinkedin size = "4rem" />
          </SocialIcons>
        </SocialContainer>
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

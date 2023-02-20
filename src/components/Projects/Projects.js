import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects, Workprojects, Paperprojects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id = "projects">
    <SectionDivider />
    <br />
    <SectionTitle> Personal Projects</SectionTitle>
    <SectionText> Here's some of my personal and academic projects</SectionText>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, visit}) => (
        <BlogCard key = {id}>
          <Img src ={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                  <Tag key = {i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href = {visit} target="_blank">Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
      {Paperprojects.map(({id, image, title, description, tags, paper, visit}) => (
      <BlogCard key = {id}>
        <Img src ={image} />
        <TitleContent>
          <HeaderThree title>{title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <div>
          <br />
          <TitleContent>Stack</TitleContent>
          <TagList>
            {tags.map((tag, i) => (
                <Tag key = {i}>{tag}</Tag>
            ))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href = {visit} target="_blank">Code</ExternalLinks>
          <ExternalLinks href = {paper} target="_blank">Paper</ExternalLinks>
        </UtilityList>
      </BlogCard>
       ))}
    </GridContainer>

    <SectionDivider />
    <br />
    <SectionTitle> Professional Projects</SectionTitle>
    <SectionText> Here's some of my work done during my professional experience</SectionText>
    <GridContainer>
      {Workprojects.map(({id, image, title, description, tags, company}) => (
        <BlogCard key = {id}>
          <Img src ={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <HeaderThree company>{company}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                  <Tag key = {i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
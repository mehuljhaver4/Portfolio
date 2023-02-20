import React from 'react';
import { DiLinux, DiReact, DiPython,DiVisualstudio} from 'react-icons/di';
import {GiBrain} from 'react-icons/gi';
import {SiTensorflow} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <br />
    <SectionTitle> Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies!
    </SectionText>
    <List>
      <ListItem>
        <DiPython size = "4rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, R, C/C++, Java, and SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiBrain size = "4rem" />
        <ListContainer>
          <ListTitle>Applied ML</ListTitle>
          <ListParagraph>
            Experience with <br />
            Machine Learning and its applications, predictive analysis, statistical analysis, predictive data modeling, and computer vision
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTensorflow size = "4rem" />
        <ListContainer>
          <ListTitle>Packages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Pandas, NumPy, Keras, Tensorflow, PyTorch, Scikit-Learn, Matplotlib, Seaborn, ggplot2, dplyr, and Shiny
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size = "4rem" />
        <ListContainer>
          <ListTitle>Web Technologies</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, HTML5, CSS, and Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size = "4rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Jupyter Notebook, Spyder, Anaconda, VS Code, R Studio, and Git 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLinux size = "4rem" />
        <ListContainer>
          <ListTitle>Operating Systems</ListTitle>
          <ListParagraph>
            Experience with <br />
            Windows and Linux 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Technologies;

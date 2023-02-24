import React from "react";
import {
  DiReact,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiJava,
} from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've with a range of Technologies in the web devlopment world. From
      Back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <div>
          <DiReact size="3rem" />
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <DiNodejsSmall size="3rem" />

        <ListTitle>Front-End and Back-End</ListTitle>
        </div>

        <ListParagraph>
          Experience With <br />
          React.js and Node.JS
        </ListParagraph>
      </ListItem>
      <ListItem>
        <div>
          <DiMysql size="3rem" />
          <DiMongodb size="3rem" />
        <ListTitle>Database Management</ListTitle>
        </div>
        <ListParagraph>
          Experience With <br />
          NoSQL and SQL databases
        </ListParagraph>

      </ListItem>
      <ListItem>
        <div>
          <DiJavascript1 size="3rem" />
          <SiCplusplus size="3rem" />
          <DiPython size="3rem" />
          <DiJava size="3rem" />
        <ListTitle>Programming Languages</ListTitle>
        </div>

        <ListParagraph>
          Experience With <br />
          JavaScript, C++ , Python and Java
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

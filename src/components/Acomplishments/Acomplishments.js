import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText,BoxTitle } from "./AcomplishmentsStyles";

const data = [
  { number: "Associate Software Engineer", text: "At AMDOCS" },
  { number: "Backend Developer", text: "At Nemo" },
  { number: "Masters in CS", text: "From University Of Central Missouri" },
  { number: "Bachelors in CS", text: "From Birla Insitute of Technology" },
 
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Experience</SectionTitle>
    <Boxes>
      {data.map((card, index) => {
        return (
          <Box key={index}>
            <BoxTitle style="font-weight: bold">{card.number}</BoxTitle>
            <BoxText>{card.text}</BoxText>
          </Box>
        );
      })}
    </Boxes>
  </Section>
);

export default Acomplishments;

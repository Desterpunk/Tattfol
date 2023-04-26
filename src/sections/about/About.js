import React from 'react'
import * as Scroll from 'react-scroll';

import { SectionContainer } from '../../components/SectionContainer'
import { ColumnContainer } from '../../components/ColumnContainer';
import { Heading } from '../../components/Heading';
import { Image, Text, Highlight, ImageTextContainer } from './styles';
const About = () => {
  return (
    <SectionContainer>
      <Scroll.Element name="about-section">
        <ColumnContainer>
          <Heading>
            About
          </Heading>
          <ImageTextContainer>
            <Image />
            <Text>
              Hey, we're %% - <Highlight>a professional tattoo team </Highlight>
              <span aria-label="emoji">&nbsp;🔥&nbsp;</span>. We love our work speccially tattoing on new friends
            </Text>
          </ImageTextContainer>
        </ColumnContainer>
      </Scroll.Element>
    </SectionContainer>
  )
}

export default About

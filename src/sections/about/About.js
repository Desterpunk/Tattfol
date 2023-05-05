import React from 'react'
import * as Scroll from 'react-scroll';

import { SectionContainer } from '../../components/SectionContainer'
import { ColumnContainer } from '../../components/ColumnContainer';
import { Heading } from '../../components/Heading';
import { Image, Text, ImageTextContainer, Highlight, FaqContainer, Container } from './styles';
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
            <FaqContainer>
              <Container>
                <Text>
                  Hi there, my name is Ferney and I am one of two tattoo artists here at <Highlight>Studio D'S</Highlight>. With over 8 years of experience, my brother and I are committed to providing the highest quality of tattoo artistry to our clients.
                </Text>
              </Container>
              <Container>
                <Text>
                  At our shop, we prioritize cleanliness and hygiene, ensuring that our work environment is always spotless and safe for our clients. We take great pride in providing a comfortable and welcoming atmosphere for all who enter our doors.
                </Text>
              </Container>
              <Container>
                <Text>
                  Aside from our skills as artists, what really sets us apart is our friendly and family-oriented personalities. We love getting to know our clients and building relationships with them that last well beyond their tattoo appointments.
                </Text>
              </Container>
              <Container>
                <Text>
                  So whether you're a seasoned tattoo enthusiast or a first-timer, we welcome you to come visit us and experience the artistry, cleanliness, and warmth that make our shop truly one-of-a-kind.
                </Text>
              </Container>
            </FaqContainer>
          </ImageTextContainer>
        </ColumnContainer>
      </Scroll.Element>
    </SectionContainer>
  )
}

export default About

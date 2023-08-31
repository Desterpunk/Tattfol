import * as React from 'react';
import * as Scroll from 'react-scroll';
import { SectionContainer } from '../../components/SectionContainer'
import { Heading } from '../../components/Heading';
import { FaqContainer, Container, Question, Text } from './style';
import { ColumnContainer } from '../../components/ColumnContainer';
import { Tilt } from 'react-tilt';

const Faq = () => {
    return (
        <SectionContainer>
            <Scroll.Element name="faq-section">
                <ColumnContainer>
                    <Heading>FAQ</Heading>
                    <FaqContainer>
                        <Container>
                            <Tilt>
                                <Question>does it hurt...</Question>
                                <Text>simple answer is, yes it does. but it’s also very different from person to person - some have a high tolerance for pain, some don’t. No matter what - people always expect worse than it actually is.</Text>
                            </Tilt>
                        </Container>
                        <Container>
                            <Tilt>
                                <Question>how much does it cost...</Question>
                                <Text>each project of a tattoo is very individual and requires personal attention - placement, size, colors, design etc. Therefore it is very hard to say beforehand how much a tattoo will cost. Let's discuss!</Text>
                            </Tilt>
                        </Container>
                        <Container>
                            <Tilt>
                                <Question>how long does a tattoo take...</Question>
                                <Text>tattooing is not a quick process, nor should it be rushed as you will be living with the results permanently. again, depends on the tattoo - contact us!</Text>
                            </Tilt>
                        </Container>
                    </FaqContainer>
                </ColumnContainer>
            </Scroll.Element >
        </SectionContainer >
    )
}

export default Faq

import React from 'react'
import { Divider, Container, Anchor } from './styles';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Flex } from '../flex';

const SocialMedia = () => {
    return (
        <Container>
            <Anchor href="tel:+5732133917203">+57 3213391720</Anchor>
            <Divider />
            <Flex>
                <Anchor
                    target='_blank'
                    aria-label="Go to D's Instagram page"
                    href='https://instagram.com/ferney_durango_art?igshid=OGRjNzg3M2Y='>
                    <FaInstagram />
                </Anchor>
                <Anchor
                    target='_blank'
                    aria-label="Go to D's Facebook page"
                    href='https://www.facebook.com/ferney.durango.3597'>
                    <FaFacebook />
                </Anchor>
            </Flex>
        </Container>
    )
}

export default SocialMedia

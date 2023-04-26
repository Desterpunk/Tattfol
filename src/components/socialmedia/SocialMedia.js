import React from 'react'
import { Divider, Container, Anchor } from './styles';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Flex } from '../Flex';

const SocialMedia = () => {
    return (
        <Container>
            <Anchor href="https://api.whatsapp.com/send?phone=573106595083">+57 310 6595083</Anchor>
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

import React from 'react'
import { Divider, Container, Anchor } from './styles';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Flex } from '../flex';

const SocialMedia = () => {
    return (
        <Container>
            <Anchor href="https://api.whatsapp.com/send?phone=573223080409">+57 322 3080409</Anchor>
            <Divider />
            <Flex>
                <Anchor
                    target='_blank'
                    aria-label="Go to D's Instagram page"
                    href='https://instagram.com/studiodsmedellin?igshid=NTc4MTIwNjQ2YQ=='>
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

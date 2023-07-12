import React from 'react'
import { Divider, Container, Anchor } from './styles';
import { FaInstagram } from 'react-icons/fa';
import { Flex } from '../Flex';

const SocialMedia = () => {
    return (
        <Container>
            <Anchor href="https://api.whatsapp.com/send?phone=573223080409">+57 322 3080409</Anchor>
            <Divider />
            <Flex>
                <Anchor
                    target='_blank'
                    aria-label="Go to D's Instagram page"
                    href='https://www.instagram.com/studiods.medellin/'>
                    <FaInstagram />
                </Anchor>
            </Flex>
        </Container>
    )
}

export default SocialMedia

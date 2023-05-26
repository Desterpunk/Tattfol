import React from 'react'
import { Flex, Heading, List, Nav, Anchor } from './styles'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

import NavLink from '../navlink/NavLink';

const sections = ['Home', 'About', 'Gallery', 'FAQ'];
const SlideNav = ({ isOpen, onClick }) => {
  return (
    <Nav isOpen={isOpen}>
      <Flex flexDir="column">
        <Heading>Menu</Heading>
        <List>
          {sections.map((section, index) => (
            <NavLink
              onClick={onClick}
              key={index}
              section={section} />
          ))}
        </List>
      </Flex>
      <Flex flexDir="column">
        <Heading>Social</Heading>
        <Flex flexDir="row">
          <Anchor
            target='_blank'
            aria-label="Go to D's Instagram page"
            href='https://instagram.com/studiodsmedellin?igshid=NTc4MTIwNjQ2YQ=='>
            <FaInstagram
              style={{ color: 'rgba(255,255,255)', fontSize: '18px' }} />
          </Anchor>
          <Anchor href="https://api.whatsapp.com/send?phone=573223080409">
            <FaWhatsapp style={{ color: 'rgba(255,255,255)', fontSize: '18px' }} />
          </Anchor>
        </Flex>
      </Flex>
    </Nav>
  )
}

export default SlideNav

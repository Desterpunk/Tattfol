import React, { useState } from 'react'
import { Flex } from './styles'
import Hamburger from '../hamburger/Hamburger'
import SocialMedia from '../socialmedia/SocialMedia'
import SlideNav from '../slidenav/SlideNav'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Flex>
        <Hamburger isOpen={isOpen} onChange={handleOnChange} />
        <SocialMedia />
        <SlideNav isOpen={isOpen} onClick={handleOnChange}/>
      </Flex>
    </div>
  )
}

export default NavBar

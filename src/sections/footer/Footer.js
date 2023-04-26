import React from 'react'
import { FooterContainer, Image, Link } from './style'

const Footer = () => {
  return (
    <FooterContainer>
        <Image/>
        <FooterContainer>
            <span>© Copyright Tattoo D 2023</span>&nbsp;
            <span>
                Made by <Link href="#"> D. </Link>
            </span>
        </FooterContainer>
    </FooterContainer>
  )
}

export default Footer

import React from 'react'
import { FooterContainer, Image, Link } from './style'

const Footer = () => {
  return (
    <FooterContainer>
        <Image/>
        <FooterContainer>
            <span>© Copyright Studiods 2023</span>&nbsp;
            <span>
                Made by Jhon Serna <Link href="https://api.whatsapp.com/send?phone=573213391720"> Contact Info. </Link>
            </span>
        </FooterContainer>
    </FooterContainer>
  )
}

export default Footer

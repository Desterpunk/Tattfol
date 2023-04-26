import React from 'react'
import { ImageComponent, ImageContainer } from './style'

const Image = ({ src, onClick, alt }) => {
    return (
        <ImageContainer>
            <ImageComponent src={src} onClick={onClick} alt={alt} loading='lazy' />
        </ImageContainer>
    )
}

export default Image

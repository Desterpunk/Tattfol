import React, { useState } from 'react'
import * as Scroll from 'react-scroll';
import { SectionContainer } from '../../components/SectionContainer';
import { Container, ImgContainer, FullImg } from './style';
import Image from '../../components/image/Image';
import { Images } from '../../Images'
import { Heading } from '../../components/Heading';
import { ColumnContainer } from '../../components/ColumnContainer';
const Gallery = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleOnClose = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SectionContainer>
            <Scroll.Element name="gallery-section">

                <ColumnContainer>
                    <Heading>
                        Gallery
                    </Heading>
                    <Container>

                        {Images.map((img, index) => (
                            <Image
                                alt="Picture of a Tattoo"
                                key={index}
                                src={img.imageUrl}
                                onClick={() => {
                                    setPhotoIndex(index);
                                    setIsOpen(!isOpen);
                                }}>
                            </Image>
                        ))}
                        {isOpen && (
                            <ImgContainer>
                                <FullImg
                                    onClick={handleOnClose}
                                    alt="Picture of a Tattoo"
                                    key={photoIndex}
                                    src={Images[photoIndex].imageUrl}>
                                </FullImg>
                            </ImgContainer>
                        )}
                    </Container>
                </ColumnContainer>
            </Scroll.Element>
        </SectionContainer>
    )
}

export default Gallery

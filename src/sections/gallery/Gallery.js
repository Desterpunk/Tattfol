import React, { useState } from 'react'
import * as Scroll from 'react-scroll';
import { SectionContainer } from '../../components/SectionContainer';
import { Container, ImgContainer, FullImg, Carrousel, Slide, InnerDiv } from './style';
import Image from '../../components/image/Image';
import { Heading } from '../../components/Heading';
import { ColumnContainer } from '../../components/ColumnContainer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Gallery = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleOnClose = () => {
        setIsOpen(!isOpen);
    };

    const importAll = (r) => r.keys().map(r);
    const fotos = importAll(require.context('./image', false, /\.(JPG|png|jpe?g|svg)$/));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: photoIndex,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <SectionContainer>
                <Scroll.Element name="gallery-section">

                    <ColumnContainer>
                        <Heading>
                            Gallery
                        </Heading>
                        <Container>
                            {fotos.map((img, index) => (
                                <Image
                                    alt="Picture of a Tattoo"
                                    key={index}
                                    src={img}
                                    onClick={() => {
                                        setPhotoIndex(index);
                                        setIsOpen(!isOpen);
                                    }}>
                                </Image>
                            ))}
                        </Container>
                    </ColumnContainer>
                </Scroll.Element>
            </SectionContainer >
            {isOpen && (
                <ImgContainer>
                    <InnerDiv>
                        <Carrousel>
                            <Slide {...settings}>
                                {fotos.map((img, index) => (
                                    <FullImg
                                        onClick={handleOnClose}
                                        alt="Picture of a Tattoo"
                                        key={index}
                                        src={img}>
                                    </FullImg>
                                ))}
                            </Slide>
                        </Carrousel>
                    </InnerDiv>
                </ImgContainer>
            )}
        </>
    )
}

export default Gallery

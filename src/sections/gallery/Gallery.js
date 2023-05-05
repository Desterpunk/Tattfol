import React, { useState } from 'react'
import * as Scroll from 'react-scroll';
import { SectionContainer } from '../../components/SectionContainer';
import { Container, ImgContainer, FullImg, Carrousel, Slide, InnerDiv, CloseButton } from './style';
import Image from '../../components/image/Image';
import { Heading } from '../../components/Heading';
import { ColumnContainer } from '../../components/ColumnContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Gallery = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(orientation: portrait)");
        const handleOrientationChange = (e) => setIsPortrait(e.matches);
        mediaQuery.addListener(handleOrientationChange);
        return () => mediaQuery.removeListener(handleOrientationChange);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(orientation: portrait)");
        handleOnPortraitModeChange(mediaQuery);
        mediaQuery.addListener(handleOnPortraitModeChange);
        return () => mediaQuery.removeListener(handleOnPortraitModeChange);
    }, []);


    const handleOnClose = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };


    const handleOnImageClick = (e) => {
        e.stopPropagation();
    };

    const handleOnPortraitModeChange = (e) => {
        setIsPortrait(e.matches);
    };

    const importAll = (r) => r.keys().map(r);
    const fotos = importAll(require.context('./image', false, /\.(JPG|png|jpe?g|svg)$/));

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: photoIndex,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 580,
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
                <ImgContainer onClick={handleOnClose}>
                    <InnerDiv onClick={handleOnImageClick} className={isPortrait ? "portrait-mode" : ""}>
                        <CloseButton className="close-button" onClick={handleOnClose}>Close</CloseButton>

                        <Carrousel>
                            <Slide {...settings}>
                                {fotos.map((img, index) => (
                                    <TransformWrapper>
                                        <TransformComponent>
                                            <FullImg
                                                onClick={handleOnImageClick}
                                                className="FullImg"
                                                alt="Picture of a Tattoo"
                                                key={index}
                                                src={img}>
                                            </FullImg>
                                        </TransformComponent>
                                    </TransformWrapper>


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

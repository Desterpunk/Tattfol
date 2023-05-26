import styled from 'styled-components';
import { Flex } from '../../components/Flex';
import Slider from 'react-slick';

export const Container = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.9);
  height: 100%;
  width: 100%;
  z-index: 110;


  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:hover:before {
    cursor: pointer;
  }
  
`;


export const Carrousel = styled.div`
color: white;
display:flex;
flex-direction:column;
justify-content: center;
width: 100%;
height: 100%;

`

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
    display: flex;
    border: 0.5px solid white;
    padding: 12px 20px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    font-weight: 300;
    transition: all 0.3s ease;

    &:hover {
      background-color: white;
      color: rgb(36,35,35);
    }
`

export const Slide = styled(Slider)`
  height: 80%;

  & .slick-slide div{
    padding-left: 5px;
    padding-right: 5px;
    max-height:700px;
  }

  & .slick-next {
    right: -40px !important;
  }

  & .slick-dots li.slick-active button:before{
    color: rgb(36,35,35);

  }

  & .slick-dots li button:before {
    padding: 1rem 0;
    color: #fff;
    font-size: 0.5rem;
  }
`

export const FullImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  width: 100%;
`

export const InnerDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.portrait-mode {
    ${FullImg} {
      height: 100%;
      width: auto;
      position: relative;
    }

    ${Carrousel} {
      position: absolute;
      width: 100%;
    }

    .slick-prev {
      left: 0;
    }

    .slick-next {
      right: 0;
    }}
`



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
  display: flex;
  justify-content: center;
  align-items: center;

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

`

export const Slide = styled(Slider)`
  & .slick-slide div{
    margin: 0 1rem;
  }

  & .slick-next {
    right: -40px !important;
  }

  & .slick-dots li.slick-active button:before{
    color: hsla(0, 60%, 35%, 0.6) ;

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
  
`

export const InnerDiv = styled.div`
  width: 90%;
  height: 90%;
  margin-top: 0px;

  &.portrait-mode {
    ${FullImg} {
      height: 100%;
      width: auto;
      position: relative;
    }

    ${Carrousel} {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 1rem;
    }

    .slick-prev {
      left: 0;
    }

    .slick-next {
      right: 0;
    }

    .slick-dots {
      bottom: 40px;
    }}
`



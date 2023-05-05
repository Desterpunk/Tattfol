import styled from 'styled-components';
import { Flex } from '../../components/Flex';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { breakPoints } from '../../styles/breakPoints';

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
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerDiv = styled.div`
  width: 50%;
  height: 50%;
  margin-top: 0px;
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
    padding: 2rem 0;
    color: #fff;
    font-size: 0.5rem;
  }
`

export const FullImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  height: 320px;

  ${breakPoints.tablet} {
    height:240px ;
  }
  
`

export const LogoLeft = styled(FaAngleLeft)`
  padding: 30px;
`

export const LogoRight = styled(FaAngleRight)`
    padding: 30px;
`
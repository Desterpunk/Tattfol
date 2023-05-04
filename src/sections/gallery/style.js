import styled from 'styled-components';
import { Flex } from '../../components/Flex';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';

export const Container = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.div`
  position: fixed;
  top: 0; left: 0;
  background: rgba(0,0,0,.9);
  height: 100%;
  width: 100%;
  z-index: 10;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`


export const Carrousel = styled.div`
padding: 5rem;
color: white;
height: 100vh;
display:flex;
flex-direction:column;
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
    color: #fff;
    font-size: 0.5rem;
    top: 1rem;
  }
`

export const FullImg = styled.img`
  height: 300px;
`

export const LogoLeft = styled(FaAngleLeft)`
  padding: 30px;
`

export const LogoRight = styled(FaAngleRight)`
    padding: 30px;
`
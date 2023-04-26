import styled from 'styled-components';
import { Flex } from '../../components/Flex';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const FullImg = styled.img`
  width: 500px;
  height: 500px;
  cursor: pointer;
  transition: filter 0.2s ease;
  object-fit: cover;
  display: inline;
  border: 4px solid #000;
  margin: 10px 0;
  transition: .2s linear;
`

export const LogoLeft = styled(FaAngleLeft)`
  padding: 30px;
`

export const LogoRight = styled(FaAngleRight)`
    padding: 30px;
`
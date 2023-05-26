import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import { breakPoints } from '../../styles/breakPoints';
export const Video = styled.video`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 0;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Logo = styled.img.attrs({ alt: 'Logo of Tattoo D' })`
  position: relative;
  z-index: 1;
  width: 200px;
  opacity: 1;

  ${breakPoints.tablet} {
    width: 300px;
  }
`;

export const LogoPlaceHolder = styled.img.attrs({
  alt: 'Placeholder Logo Tattoo D'
})`
  opacity: 0.3;
  width: 200px;

  ${breakPoints.tablet} {
    width: 300px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
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
`;

export const PhoneIcon = styled(FaWhatsapp)`
  font-size: 12px;
`;

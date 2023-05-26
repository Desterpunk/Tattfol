import styled from 'styled-components';
import { breakPoints } from '../../styles/breakPoints';
import { Flex as FlexComponent } from '../Flex';
import { Anchor as AnchorComponent } from '../Anchor';

export const Nav = styled.nav`
  transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #000;
  list-style-type: none;
  position: absolute;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding-left: 40px;

  ${breakPoints.laptop} {
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding: 250px 0;
  }
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Heading = styled.h3`
  font-weight: 700;
  padding-bottom: 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid white;
  color: rgb(255, 255, 255);
`;

export const Flex = styled(FlexComponent)`
  &:nth-child(1) {
    margin: 0 0 30px 0;
  }

  ${breakPoints.laptop} {
    &:nth-child(1) {
      margin-right: 30px;
    }
  }
`;

export const Anchor = styled(AnchorComponent)`
  margin-right: 10px;

  &:last-child {
    margin: 0;
  }
`;

import styled from 'styled-components';
import { breakPoints } from '../../styles/breakPoints';
import { Flex } from '../../components/Flex';
import zotoJPG from './image/zoro.jpg';

export const FooterContainer = styled(Flex)`
    background-color: black;
    color: white;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    font-size: 10px;

    ${breakPoints.laptop} {
    flex-direction: row;
    padding: 30px 80px;
    justify-content: flex-start;
  }
`;

export const Link = styled.a`
  color: hsl(0, 60%, 40%);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 2px solid hsl(0, 60%, 40%);
`;

export const Image = styled.div`
  background:url(${zotoJPG});
  background-position: center;
  background-size: cover;
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  margin-bottom: 20px;

  ${breakPoints.laptop} {
    margin: 0 20px 0 0;
  }
`;

export const FooterTextContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  line-height: 25px;
  color: #fff;
  word-spacing: 2.5px;

  ${breakPoints.laptop} {
    align-items: flex-start;
  }
`;

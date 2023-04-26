import styled from 'styled-components';
import { Text as TextComponent } from '../../components/Text';
import { ColumnContainer } from '../../components/ColumnContainer';
import zotoJPG from './image/zoro.jpg';
import { breakPoints } from '../../styles/breakPoints';

export const Image = styled.div`
  border-radius: 50%;
  background:url(${zotoJPG});
  background-size: contain;
  width: 170px;
  height: 170px;
  flex-shrink: 0;
  border: 2px solid #fff;
  margin: 0 0 30px 0;

  ${breakPoints.laptop} {
    width: 170px;
    height: 170px;
    margin: 0 70px 0 0;
  }
`;

export const Text = styled(TextComponent)`
  line-height: 35px;
  text-align: center;
  color: #fff;

  ${breakPoints.laptop} {
    text-align: left;
    line-height: 40px;
    max-width: 550px;
  }
`;

export const Highlight = styled.span`
  color: #fff;
  padding-bottom: 2px;
  border-bottom: 2px solid white;
`;

export const ImageTextContainer = styled(ColumnContainer)`
  ${breakPoints.laptop} {
    flex-direction: row;
  }
`;
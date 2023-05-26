import styled from 'styled-components';
import { Text as TextComponent } from '../../components/Text';
import { ColumnContainer } from '../../components/ColumnContainer';
import { breakPoints } from '../../styles/breakPoints';

export const Logo = styled.img.attrs({ alt: 'Logo of Tattoo D' })`
  position: relative;
  z-index: 1;
  width: 170px;
  opacity: 1;

  ${breakPoints.tablet} {
    width: 170px;
  }
`;


export const Text = styled(TextComponent)`
  line-height: 35px;
  text-align: center;
  color: #fff;

  ${breakPoints.tablet} {
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
  ${breakPoints.tablet} {
    flex-direction: row;
  }
`;

export const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1px 10px;
    background-color: black;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
    border-radius: 5px;
    margin: 10px 10px;
`;

export const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${breakPoints.laptopL} {
    flex-direction: row;
    }
`;

export const Question = styled(Text)`
    color: white;
    margin-bottom: 25px;
    font-weight: 100;
    font-size: 22px;
`;

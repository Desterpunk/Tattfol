import styled from 'styled-components';
import { breakPoints } from '../../styles/breakPoints';

export const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 35px 30px;
    background-color: black;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
    border-radius: 5px;

    &:nth-child(2) {
    margin: 30px 0;
    }
    ${breakPoints.laptop} {
    &:nth-child(2) {
      margin: 0 30px;
    }
  }
`;

export const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${breakPoints.laptop} {
    flex-direction: row;
    }
`;

export const Text = styled.span`
    color: white;
    line-height: 30px;
    flex-wrap: wrap;
    font-size: 18px;
`;

export const Question = styled(Text)`
    color: hsl(0, 60%, 35%);
    margin-bottom: 25px;
    font-weight: 100;
    font-size: 22px;
`;
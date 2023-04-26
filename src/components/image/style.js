import styled from "styled-components";
import { breakPoints } from "../../styles/breakPoints";

export const ImageComponent = styled.img`
  width: 160px;
  height: 160px;
  cursor: pointer;
  display: block;
  transition: filter 0.2s ease;

  &:hover{
    transform: scale(1.02);
  }
`;

export const ImageContainer = styled.div`
  display: inline;
  border: 2px solid #000;
  margin: 10px 0;
  transition: .2s linear;

  ${breakPoints.mobileL} {
    margin: 5px;
  }

`
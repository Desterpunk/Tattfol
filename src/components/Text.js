import styled from "styled-components";
import { breakPoints } from "../styles/breakPoints";

export const Text = styled.span`
    text-align: left;
    font-size: 18px;

    ${breakPoints.laptop} {
        font-size: 20px;
    }
`
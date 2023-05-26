import styled from "styled-components";
import { breakPoints } from "../styles/breakPoints";

export const SectionContainer = styled.section`
  padding: 70px 40px 30px 40px;
  background-color: rgb(36,35,35);

  ${breakPoints.laptop}{
    padding: 70px 80px;
  }
`
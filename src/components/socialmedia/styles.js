import styled from 'styled-components';
import { breakPoints } from '../../styles/breakPoints';
import { Flex } from '../Flex';
import { Anchor as AnchorComponent } from '../Anchor';

export const Container = styled(Flex)`
  align-items: flex-end;
  z-index: 1;
  padding: 20px;
  background-color: rgb(36,35,35);
  display: none;

  ${breakPoints.laptop} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Divider = styled.span`
  border-top: 1px solid white;
  width: 105px;
  height: auto;
  margin: 5px 0;

  ${breakPoints.mobileL} {
    transform: rotate(90deg);
    width: 25px;
    margin: 0;
  }
`;

export const Anchor = styled(AnchorComponent)`
  && {
    &:last-child {
      margin-left: 5px;
    }
  }
`;

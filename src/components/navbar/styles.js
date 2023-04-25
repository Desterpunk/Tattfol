import styled from 'styled-components';
import { Flex as FlexComponent } from '../flex';

export const Flex = styled(FlexComponent)`
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

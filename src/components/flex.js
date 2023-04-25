import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir};

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
`;

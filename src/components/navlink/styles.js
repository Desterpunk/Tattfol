import styled from 'styled-components';

export const ListItem = styled.li`
  cursor: pointer;
  transition: color 0.3s ease;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;

  :hover {
    color: white;
  }

  &:last-child {
    margin: 0;
  }
`;

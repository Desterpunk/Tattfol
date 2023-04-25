import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 101;
  padding: 20px;
  height: 100%;
  background-color: hsla(0, 60%, 35%, 0.6);
  
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  cursor: pointer;
  position: absolute;
  inset: 0;
  min-height: 100%;
  min-width: 100%;
  z-index: 102;

  :checked ~ span:nth-last-child(1) {
    transform: rotate(-45deg) translateX(2.5px) translateY(2.5px);
  }
  :checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  :checked ~ span:nth-last-child(3) {
    transform: rotate(45deg) translateX(2px) translateY(-2.5px);
  }
`;

export const Bar = styled.span`
  width: 30px;
  height: 2px;
  border-top: 1px solid #fff;
  display: block;
  margin-bottom: 7.5px;
  transform-origin: left center;
  transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.3s ease;
  &:first-child {
    transform-origin: 0% 0%;
  }
  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  &:last-child {
    margin: 0;
  }
`;

import React from 'react'
import { Container, Input, Bar } from './styles';

const Hamburger = ({ onChange, isOpen }) => {
  return (
    <Container>
      <Input onChange={onChange} checked={isOpen} />
      <Bar />
      <Bar />
      <Bar />
    </Container>
  )
}

export default Hamburger
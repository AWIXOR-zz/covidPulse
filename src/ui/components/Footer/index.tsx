import React from 'react'
import { Wrapper } from './styles'
import Typography from '../Typography'

const Footer = () => {
  return (
    <Wrapper>
      <Typography as="p" fontSize={18} align="center">
        Made with love by <a href="https://awixor.com/">Awixor</a>
      </Typography>
    </Wrapper>
  )
}

export default Footer

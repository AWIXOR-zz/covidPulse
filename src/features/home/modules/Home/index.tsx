import React from 'react'
import Container from 'ui/components/Container'
import styled from 'styled-components'
import SEO from 'ui/components/SEO'
import Card from 'ui/components/Card'
import { CardWrapper } from 'features/home/components/shared-style'
import Typography from 'ui/components/Typography'
import Button from 'ui/components/Button'
import InputField from 'ui/components/InputField'
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
export default function Home() {
  return (
    <Container>
      <SEO url="/" title="Home" />
      <CardWrapper as={Card}>
        <Typography as="h1" fontSize={42} align="center">
          Welcome to CovidPulse
        </Typography>
        <InputField label="Search for a venue">
          <input
            type="text"
            name="search"
            placeholder="search for venue by name or location"
          />
        </InputField>
        <Flex>
          <Button size="large" variant="primary" type="submit">
            Search
          </Button>
          <Button size="large" variant="danger" type="submit">
            report covid-19 infection
          </Button>
        </Flex>
      </CardWrapper>
    </Container>
  )
}

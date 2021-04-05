import React from 'react'
import Container from 'ui/components/Container'
import styled from 'styled-components'
import SEO from 'ui/components/SEO'
import Card from 'ui/components/Card'
import { CardWrapper } from 'features/home/components/shared-style'
import Typography from 'ui/components/Typography'
// import Button from 'ui/components/Button'
import InputField from 'ui/components/InputField'
import Mask from 'assets/icons/mask'
import HandSanitizer from 'assets/icons/handsanitizer'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
`
const CardItem = styled.div`
  padding: 2rem;
`
const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export default function Search() {
  return (
    <Container>
      <SEO url="/" title="Home" />
      <Typography as="h1" fontSize={42} align="center">
        Search Page
      </Typography>

      <CardWrapper as={Card}>
        <InputField label="Search for a venue">
          <input
            type="text"
            name="search"
            placeholder="search for venue by name or location"
          />
        </InputField>
        <Flex>
          <CardItem as={Card}>
            <Typography as="h2" fontSize={18} align="center">
              Name: Houcine
            </Typography>
            <Typography as="h4" fontSize={14} align="left" fontWeight={400}>
              Localtion: New york
            </Typography>
            <Typography as="h4" fontSize={14} align="left" fontWeight={400}>
              Score: <span style={{ color: 'red' }}>10</span>
            </Typography>
            <Typography as="h4" fontSize={14} align="left" fontWeight={400}>
              Capacity: <span>5</span>
            </Typography>
            <Typography as="h4" fontSize={14} align="left" fontWeight={400}>
              social distancing : <span>...</span>
            </Typography>
            <ListItem>
              <Mask /> : <span>Yes</span>
            </ListItem>
            <ListItem>
              <HandSanitizer /> : <span>Yes</span>
            </ListItem>
          </CardItem>
        </Flex>
      </CardWrapper>
    </Container>
  )
}

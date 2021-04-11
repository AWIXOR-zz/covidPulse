import React from 'react'
import Container from 'ui/components/Container'
import styled from 'styled-components'
import SEO from 'ui/components/SEO'
import Card from 'ui/components/Card'
import { CardWrapper } from 'features/home/components/shared-style'
import Typography from 'ui/components/Typography'
// import Button from 'ui/components/Button'
import image2 from 'assets/images/2.jpg'
import { Item } from 'react-flex-ready'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Charts from 'features/venue/components/charts'

const Flex = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  margin: 48px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const ItemDetails = styled.div<{ height?: string; width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

export default function VenueDetails() {
  return (
    <Container>
      <SEO url="/" title="Venue" />
      <Typography as="p" fontSize={42} align="center">
        Venue Details
      </Typography>
      <CardWrapper as={Card}>
        <Flex>
          <img src={item.image} alt={Item.name} height={300} />
          <ItemDetails>
            <Typography as="p" fontSize={32} align="center">
              {item.name}
            </Typography>
            <Typography as="p" fontSize={24} align="center">
              {item.address}
            </Typography>
            <div>
              <ProgressBar>
                <ProgressBar
                  striped
                  variant={
                    item.score <= 4
                      ? 'success'
                      : item.score <= 7
                      ? 'warning'
                      : 'danger'
                  }
                  now={item.score * 10}
                  key={1}
                />
              </ProgressBar>
              <Typography as="h2" fontSize={24} align="center">
                {`${item.score} / 10`}
              </Typography>
            </div>
            <Typography as="p" fontSize={42} align="center" color="green">
              LOW RISK
            </Typography>
          </ItemDetails>
        </Flex>
        <Flex direction="column">
          <ItemDetails>
            <Typography as="p" fontSize={32} align="left">
              Safety Precautions
            </Typography>
            <ul>
              <li>Masks : Required all the time</li>
              <li>Hand Sanitizer : Available</li>
              <li>Alcohol Served : No</li>
              <li>Venue Capacity : 15 people</li>
              <li>Plexi-Glass : Yes</li>
            </ul>
          </ItemDetails>
        </Flex>
        <Flex direction="column">
          <ItemDetails height="500px" width="100%">
            <Typography as="p" fontSize={32} align="left">
              COVID-19 Cases - Postcode : SE10 383
            </Typography>
            <Charts />
          </ItemDetails>
        </Flex>
        <Flex direction="column">
          <ItemDetails height="500px" width="100%">
            <Typography as="p" fontSize={32} align="left">
              How Busy is the Venue
            </Typography>
            <Charts />
          </ItemDetails>
        </Flex>
      </CardWrapper>
    </Container>
  )
}

const item = {
  id: 1,
  name: 'Sushi Samba',
  address: '123 Rover Drive, Picadilly, SE10 383, London, UK',
  image: image2,
  location: 'New York',
  score: 7,
  mask: true,
  handSanitizer: true,
  capacity: 5,
  alcohol: true,
  socialDistancing: 'yes',
  covidLevel: 'Hight',
  Activities: ['talking', 'singing', 'dancing'],
}

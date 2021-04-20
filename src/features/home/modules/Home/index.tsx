import React from 'react'
import Container from 'ui/components/Container'
import styled from 'styled-components'
import SEO from 'ui/components/SEO'
import Card from 'ui/components/Card'
// import { CardWrapper } from 'features/home/components/shared-style'
import Typography from 'ui/components/Typography'
import Button from 'ui/components/Button'
import maps from 'assets/images/maps.png'
import { Link } from 'react-router-dom'
import Safety from 'assets/icons/Safety'
import CovidRates from 'assets/icons/CovidRates'
import Network from 'assets/icons/Network'
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const ListItem = styled.div``
const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
`

const GridItem = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
`
const Circle = styled.div`
  border: 1px solid #000;
  border-radius: 100%;
  padding: 1rem;
  /* width: 24px; */
  /* height: 24px; */
`

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
export default function Home() {
  return (
    <Container>
      <SEO url="/" title="Home" />
      <Grid>
        <GridItem>
          <ListItem>
            <Typography as="p" fontSize={42} align="left">
              COVID PULSE
            </Typography>
            <Typography as="p" fontSize={18} align="left">
              Safely Return to Your Favorite Activities
            </Typography>
          </ListItem>
          <ListItem>
            <Link to="/search">
              <Button size="large" variant="primary">
                Browser venues
              </Button>
            </Link>
          </ListItem>
        </GridItem>
        <GridItem>
          <img src={maps} alt="maps" height={400} />
        </GridItem>
      </Grid>
      <Typography as="p" fontSize={42} align="center">
        Features
      </Typography>
      {/* <CardWrapper > */}
      <Flex>
        <FlexItem as={Card}>
          <Circle>
            <Safety />
          </Circle>
          <Typography as="h2" fontSize={18} align="center">
            Understand the safety precautions present at the venue
          </Typography>
          <Typography as="p" fontSize={14} align="center" fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptatum, consequuntur unde a vel veniam quaerat?
          </Typography>
        </FlexItem>

        <FlexItem as={Card}>
          <Circle>
            <CovidRates />
          </Circle>
          <Typography as="h2" fontSize={18} align="center">
            View Real-Time Covid rates at venue location
          </Typography>
          <Typography as="p" fontSize={14} align="center" fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptatum, consequuntur unde a vel veniam quaerat?
          </Typography>
        </FlexItem>
        <FlexItem as={Card}>
          <Circle>
            <Network />
          </Circle>
          <Typography as="h2" fontSize={18} align="center">
            See how busy the venue is
          </Typography>
          <Typography as="p" fontSize={14} align="center" fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptatum, consequuntur unde a vel veniam quaerat?
          </Typography>
        </FlexItem>
      </Flex>
    </Container>
  )
}

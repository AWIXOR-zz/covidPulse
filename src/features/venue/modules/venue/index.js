import React, { useContext } from 'react'
import Container from 'ui/components/Container'
import styled from 'styled-components'
import SEO from 'ui/components/SEO'
import Card from 'ui/components/Card'
import { CardWrapper } from 'features/home/components/shared-style'
import Typography from 'ui/components/Typography'
import Button from 'ui/components/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Charts from 'features/venue/components/charts'
import { Link, useParams } from 'react-router-dom'
import { VenueContext } from 'features/search/providers/VenueProvider'

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  margin: 48px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

export default function VenueDetails() {
  const { id } = useParams()
  const value = useContext(VenueContext)

  const [venues] = value.venues
  const venueDetails = venues.filter((venue) => {
    return venue.id.toString() === id.toString()
  })
  console.log(venueDetails)
  return (
    <Container>
      <SEO url="/venues/:id" title="Venue details" />
      <Typography as="p" fontSize={42} align="center">
        Venue Details
      </Typography>
      <Link to="/search">
        <Button size="large" variant="danger" style={{ margin: 24 }}>
          Go back
        </Button>
      </Link>
      {venueDetails.map((item, index) => (
        <CardWrapper as={Card} key={index}>
          <Flex>
            <ItemDetails>
              <Typography as="p" fontSize={32} align="center">
                {item.venueName}
              </Typography>
              <Typography as="p" fontSize={24} align="center">
                {item.fullAddress}
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
                <li>{`Masks : ${item.details.masks}`}</li>
                <li>
                  {`Hand Sanitizer : ${item.details.hygieneMeasures.handSanitizer}`}
                </li>
                <li>
                  {`Disinfection : ${item.details.hygieneMeasures.disinfection}`}
                </li>
                <li>
                  {`Physical Menus: ${item.details.hygieneMeasures.physicalMenus}`}
                </li>
                <li>{`Ventilation : ${
                  item.details.ventilation.natural === 'Yes' ? 'natural' : ''
                }, ${
                  item.details.ventilation.mechanical === 'Yes'
                    ? 'mechanical'
                    : ''
                }`}</li>
                <li>{`Alcohol Served : ${item.details.alcoholConsumption}`}</li>
                <li>{`Venue Capacity : ${item.capacity} people`}</li>
                <li>{`Plexi-Glass : ${item.details.socialDistancingMeasures.plexiglass}`}</li>
                <li>{`Tables : ${item.details.socialDistancingMeasures.tables}`}</li>
                <li>{`Activities : ${
                  item.details.activities.talking === 'Yes' ? 'Talking' : ''
                }, ${
                  item.details.activities.singing === 'Yes' ? 'Singing' : ''
                }, ${
                  item.details.activities.dancing === 'Yes' ? 'Dancing' : ''
                }`}</li>
                <li>{`Time spent at venue : ${item.details.timeSpentAtVenue}`}</li>
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
      ))}
    </Container>
  )
}

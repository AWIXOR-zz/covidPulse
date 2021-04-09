import React from 'react'
import Container from 'ui/components/Container'
import styled from 'styled-components'
import SEO from 'ui/components/SEO'
import Card from 'ui/components/Card'
// import { CardWrapper } from 'features/home/components/shared-style'
import Typography from 'ui/components/Typography'
// import Button from 'ui/components/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import image2 from 'assets/images/2.jpg'
import image3 from 'assets/images/3.jpg'
import image4 from 'assets/images/4.jpg'
import image5 from 'assets/images/5.jpg'
import InputField from 'ui/components/InputField'
import Mask from 'assets/icons/Mask'
import HandSanitizer from 'assets/icons/HandSanitizer'
// import VenueSize from 'assets/icons/VenueSize'
import Wine from 'assets/icons/Wine'
// import Activities from 'assets/icons/Activities'
import Talking from 'assets/icons/Talking'
import Singing from 'assets/icons/Singing'
import Dancing from 'assets/icons/Dancing'
import SmallSize from 'assets/icons/SmallSize'
import MediumSize from 'assets/icons/MediumSize'
import LargeSize from 'assets/icons/LargeSize'
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-grow: 4; */
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const CardItem = styled.div`
  padding: 2rem;
  margin: 1rem;
  height: -webkit-fill-available;
  justify-content: space-around;
  display: flex;
  height: 500px;
  flex-direction: column;
`
const IconsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-wrap: wrap;
`
export default function Search() {
  return (
    <Container>
      <SEO url="/" title="Home" />
      <Typography as="h1" fontSize={42} align="center">
        Search Page
      </Typography>
      <InputField label="Search for a venue">
        <input
          type="text"
          name="search"
          placeholder="search for venue by name or location"
        />
      </InputField>
      {/* <CardWrapper as={Card}> */}
      <Flex>
        {items.map((item, index) => (
          <CardItem as={Card} key={index}>
            <Typography as="h2" fontSize={18} align="center">
              {item.name}
            </Typography>
            <img src={item.image} alt={item.name} height={200} width={300} />
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
            <IconsList>
              {item.mask ? <Mask /> : null}
              {item.handSanitizer ? <HandSanitizer /> : null}
              {item.alcohol ? <Wine /> : null}
              {item.alcohol ? <Talking /> : null}
              {item.alcohol ? <Singing /> : null}
              {item.alcohol ? <Dancing /> : null}
              {item.capacity <= 3 ? (
                <SmallSize />
              ) : item.capacity <= 6 ? (
                <MediumSize />
              ) : (
                <LargeSize />
              )}
            </IconsList>
          </CardItem>
        ))}
      </Flex>
      {/* </CardWrapper> */}
    </Container>
  )
}

const items = [
  {
    id: 1,
    name: 'Sushi Samba',
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
  },
  {
    id: 2,
    name: 'Chiken Palace',
    image: image2,
    location: 'Paris',
    score: 4.2,
    mask: false,
    handSanitizer: true,
    capacity: 5,
    alcohol: true,
    socialDistancing: 'yes',
    covidLevel: 'Hight',
    Activities: ['talking', 'singing'],
  },
  {
    id: 3,
    name: 'Sushi Samba',
    image: image3,
    location: 'New York',
    score: 9,
    mask: true,
    handSanitizer: true,
    capacity: 8,
    alcohol: true,
    socialDistancing: 'yes',
    covidLevel: 'Hight',
    Activities: ['talking', 'singing', 'dancing'],
  },
  {
    id: 4,
    name: 'Sushi Samba',
    image: image4,
    location: 'New York',
    score: 8,
    mask: true,
    handSanitizer: true,
    capacity: 4,
    alcohol: true,
    socialDistancing: 'yes',
    covidLevel: 'Hight',
    Activities: ['talking', 'dancing'],
  },
  {
    id: 5,
    name: 'Sushi Samba',
    image: image5,
    location: 'New York',
    score: 2,
    mask: true,
    handSanitizer: true,
    capacity: 7,
    alcohol: true,
    socialDistancing: 'yes',
    covidLevel: 'Hight',
    Activities: ['singing', 'dancing'],
  },
  {
    id: 6,
    name: 'Sushi Samba',
    image: image2,
    location: 'New York',
    score: 6,
    mask: true,
    handSanitizer: true,
    capacity: 6,
    alcohol: true,
    socialDistancing: 'yes',
    covidLevel: 'Hight',
    Activities: ['talking', 'singing', 'dancing'],
  },
]

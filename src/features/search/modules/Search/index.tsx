import React, { useState, useEffect } from 'react'
import Container from 'ui/components/Container'
import styled from 'styled-components'
import SEO from 'ui/components/SEO'
import Card from 'ui/components/Card'
// import { CardWrapper } from 'features/home/components/shared-style'
import Typography from 'ui/components/Typography'
import Pagination from 'react-bootstrap/Pagination'
// import Button from 'ui/components/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import items from 'data'
import InputField from 'ui/components/InputField'
import Mask from 'assets/icons/Mask'
import HandSanitizer from 'assets/icons/HandSanitizer'
import Wine from 'assets/icons/Wine'
import Talking from 'assets/icons/Talking'
import Singing from 'assets/icons/Singing'
import Dancing from 'assets/icons/Dancing'
import SmallSize from 'assets/icons/SmallSize'
import MediumSize from 'assets/icons/MediumSize'
import LargeSize from 'assets/icons/LargeSize'
import { VenueDetails } from 'ui/interfaces'
import { Link } from 'react-router-dom'
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const CardItem = styled.div`
  padding: 2rem;
  width: 100%;
  margin: 1rem;
  height: -webkit-fill-available;
  justify-content: space-around;
  display: flex;
  height: 500px;
  flex-direction: column;
  cursor: pointer;
`
const IconsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-wrap: wrap;
`
const Center = styled.div`
  text-align: center;
`
export default function Search() {
  const [venues, setVenues] = useState<VenueDetails[]>(items)
  const [active, setActive] = useState(1)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [filteredResults, setFilteredResults] = useState<VenueDetails[]>([])

  useEffect(() => {
    // axios.post(`${API_URL}auth/login`}
    setLoading(true)
    setFilteredResults(
      venues.filter(
        (venue) =>
          venue.venueName.toLowerCase().includes(search.toLowerCase()) ||
          venue.location.toLowerCase().includes(search.toLowerCase())
      )
    )
    setLoading(false)
  }, [search, venues])

  let it = []
  for (let number = 1; number <= 5; number++) {
    it.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    )
  }

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
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search for venue by name or location"
        />
      </InputField>
      <Flex>
        {venues.map((item, index) => (
          <Link to={`/venues/${item.id}`} key={index}>
            <CardItem as={Card}>
              <Typography as="h2" fontSize={18} align="center">
                {item.venueName}
              </Typography>

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
                {item.details.masks ? <Mask /> : null}
                {item.details.hygieneMeasures.handSanitizer ? (
                  <HandSanitizer />
                ) : null}
                {item.details.alcoholConsumption ? <Wine /> : null}
                {item.details.activities.talking === 'Yes' ? <Talking /> : null}
                {item.details.activities.singing === 'Yes' ? <Singing /> : null}
                {item.details.activities.dancing === 'Yes' ? <Dancing /> : null}
                {item.capacity <= 3 ? (
                  <SmallSize />
                ) : item.capacity <= 6 ? (
                  <MediumSize />
                ) : (
                  <LargeSize />
                )}
              </IconsList>
            </CardItem>
          </Link>
        ))}
      </Flex>
      <Center>
        <Pagination size="lg" style={{ justifyContent: 'center' }}>
          {it}
        </Pagination>
      </Center>
    </Container>
  )
}

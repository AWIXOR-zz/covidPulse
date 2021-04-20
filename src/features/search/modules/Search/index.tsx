import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Pagination from 'react-bootstrap/Pagination'
import { Link } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Container from 'ui/components/Container'
import SEO from 'ui/components/SEO'
import Card from 'ui/components/Card'
// import { CardWrapper } from 'features/home/components/shared-style'
import Typography from 'ui/components/Typography'
// import Button from 'ui/components/Button'
// import items from 'data'
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
// import { VenueDetails } from 'ui/interfaces'
import { API_URL } from 'config'
import Button from 'ui/components/Button'
import useDispatchVenue from 'features/search/hooks/useDispatchVenue'
import { fetchVenues } from 'features/search/actions'
import { VenueContext } from 'features/search/providers/VenueProvider'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 24px;
  justify-content: space-between;
  align-content: center;
  button {
    height: fit-content;
    align-self: center;
  }
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
  const dispatchVenue = useDispatchVenue()
  // const [venues, setVenues] = useState<VenueDetails[]>()
  const value = useContext(VenueContext)

  const [venues] = value.venues
  const [active, setActive] = useState(1)
  const [totalVenues, setTotalVenues] = useState(1)
  const [loading, setLoading] = useState(false)
  const [fetched, setFetched] = useState<boolean>(venues.fetched)
  const [search, setSearch] = useState(venues.search)

  useEffect(() => {
    axios.get(`${API_URL}venues?s=${search}`).then((res) => {
      setTotalVenues(res.data.count)
    })
    setFetched(venues.fetched)
    setActive(venues.activePage)
    // setSearch(venues.search)
  }, [search, venues])

  const handleSearch = (pageNumber: number) => {
    if (search) {
      setLoading(true)
      fetchVenues({ dispatchVenue, values: { search, pageNumber } })
      // axios
      //   .get(`${API_URL}venues?s=${search}&pageNumber=${pageNumber}`)
      //   .then((res) => {
      //     const fetchedVenues = res.data.venues
      //     setTotalVenues(res.data.count)
      //     setVenues(fetchedVenues)
      //   })
      setLoading(false)
    }
  }
  console.log(fetched)

  let it: any[] = []
  const maxPages = Math.ceil(totalVenues / 8)
  for (let number = 1; number <= maxPages; number++) {
    it.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          setActive(number)
          handleSearch(number)
        }}
      >
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
      <Grid>
        <InputField>
          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search for venue by name or location"
          />
        </InputField>
        <Button
          size="large"
          variant="secondary"
          type="submit"
          onClick={() => handleSearch(1)}
        >
          search
        </Button>
      </Grid>

      <Flex>
        {venues.venues ? (
          venues.venues.map((item: any, index: any) => (
            <Link to={`/venues/${item._id}`} key={index}>
              <CardItem as={Card}>
                <Typography as="h2" fontSize={18} align="center">
                  {item.venueName}
                </Typography>

                <ProgressBar>
                  <ProgressBar
                    striped
                    variant={
                      Math.floor(item.riskScore) <= 4
                        ? 'success'
                        : item.riskScore <= 7
                        ? 'warning'
                        : 'danger'
                    }
                    now={item.riskScore * 10}
                    key={1}
                  />
                </ProgressBar>
                <Typography as="h2" fontSize={24} align="center">
                  {`${Math.floor(item.riskScore)} / 10`}
                </Typography>
                <IconsList>
                  {item.details.masks ? <Mask /> : null}
                  {item.details.hygieneMeasures.handSanitizer ? (
                    <HandSanitizer />
                  ) : null}
                  {item.details.alcoholConsumption ? <Wine /> : null}
                  {item.details.activities.talking === 'Yes' ? (
                    <Talking />
                  ) : null}
                  {item.details.activities.singing === 'Yes' ? (
                    <Singing />
                  ) : null}
                  {item.details.activities.dancing === 'Yes' ? (
                    <Dancing />
                  ) : null}
                  {item.details.venueCapacity <= 3 ? (
                    <SmallSize />
                  ) : item.details.venueCapacity <= 6 ? (
                    <MediumSize />
                  ) : (
                    <LargeSize />
                  )}
                </IconsList>
              </CardItem>
            </Link>
          ))
        ) : loading ? (
          <Typography>Loading</Typography>
        ) : (
          <Typography>No venues fetched yet</Typography>
        )}
      </Flex>
      <Center>
        {it.length === 1 || !fetched ? null : (
          <Pagination size="lg" style={{ justifyContent: 'center' }}>
            {it}
          </Pagination>
        )}
      </Center>
    </Container>
  )
}

import axios from 'axios'
import { API_URL } from 'config'
import { DispatchVenue } from 'features/search/interfaces'

export type FetchValues = {
  search: string
  pageNumber: number
}
type FetchVenuesArgs = {
  dispatchVenue: DispatchVenue
  values: FetchValues
}

export const fetchVenues = async ({
  dispatchVenue,
  values,
}: FetchVenuesArgs) => {
  try {
    let { search, pageNumber } = values

    // Here is the axios call for user login

    const { data } = await axios.get(
      `${API_URL}venues?s=${search}&pageNumber=${pageNumber}`
    )

    dispatchVenue({
      type: 'FETCH_VENUES',
      payload: data?.venues,
      activePage: pageNumber,
      search: search,
    })
  } catch (err) {
    console.log('error', err?.response?.data.message)
  }
}

import { VenueData } from 'ui/interfaces'

export type StateVenue = {
  venues: VenueData[] | any
  fetched: boolean
  activePage: number
  search: string
}

export type VenueActions =
  | {
      type: 'FETCH_VENUES'
      payload: StateVenue
      activePage: number
      search: string
    }
  | { type: 'LOADING_TRUE' }
  | { type: 'LOADING_FALSE' }

export type DispatchVenue = (action: VenueActions) => void

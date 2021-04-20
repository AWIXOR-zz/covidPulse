import { VenueData } from 'ui/interfaces'

export type StateVenue = {
  venues: VenueData[] | any
  // data: any // Type it as your returned user data from your API
}

export type VenueActions =
  | { type: 'FETCH_VENUES'; payload: StateVenue }
  | { type: 'LOADING_TRUE' }
  | { type: 'LOADING_FALSE' }

export type StateUser = {
  isLoggedIn: boolean
  loading: boolean
  data: any // Type it as your returned user data from your API
}

export type DispatchVenue = (action: VenueActions) => void

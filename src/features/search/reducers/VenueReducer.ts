import type { StateVenue, VenueActions } from 'features/search/interfaces'

export const INITIAL_STATE: StateVenue = {
  venues: null,
  fetched: false,
  activePage: 1,
  search: '',
}

const VenueReducer = (
  venues: typeof INITIAL_STATE,
  action: VenueActions
): StateVenue => {
  switch (action.type) {
    case 'FETCH_VENUES':
      return {
        ...venues,
        venues: action.payload,
        fetched: true,
        activePage: action.activePage,
        search: action.search,
      }
    default:
      throw new Error()
  }
}

export default VenueReducer

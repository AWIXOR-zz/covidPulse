import React, { createContext, useReducer } from 'react'

// import items from 'data'
import VenueReducer, { INITIAL_STATE } from '../reducers/VenueReducer'

export const VenueContext = createContext()
export const VenueDispatchContext = createContext()

export const VenueProvider = ({ children }) => {
  // const [venues, setVenues] = useState(items)
  const [venues, dispatchVenues] = useReducer(VenueReducer, INITIAL_STATE)

  const value = {
    venues: [venues, dispatchVenues],
  }

  return (
    <VenueContext.Provider value={value}>
      <VenueDispatchContext.Provider value={dispatchVenues}>
        {children}
      </VenueDispatchContext.Provider>
    </VenueContext.Provider>
  )
}

import React, { createContext, useState } from 'react'

import items from 'data'

export const VenueContext = createContext()

export const VenueProvider = ({ children }) => {
  const [venues, setVenues] = useState(items)

  // console.log(venues)
  const value = {
    venues: [venues, setVenues],
  }
  console.log(value)

  return <VenueContext.Provider value={value}>{children}</VenueContext.Provider>
}

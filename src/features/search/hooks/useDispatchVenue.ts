import { useContext } from 'react'
import { VenueDispatchContext } from '../providers/VenueProvider'

const useDispatchVenue = () => {
  const context = useContext(VenueDispatchContext)

  if (context === undefined) {
    throw new Error('useDispatchVenue must be used within a VenueProvider')
  }

  return context
}

export default useDispatchVenue

import history from 'helpers/history'
import axios from 'axios'
// import setAuthToken from 'helpers/setAuthToken'
// import storage from 'helpers/storage'
import { API_URL } from 'config'
import { DispatchUser } from 'features/auth/interfaces'

export type UserValues = {
  email: string
  password: string
  username?: string
}
export type EditVenueValues = {
  venueName: String
  description: String
  venueType: String
  details: {
    venueCapacity: Number
    capacityLimit: Number
    outdoorIndoorCapacity: {
      indoor: Number
      outdoor: Number
    }
    ventilation: {
      natural: String
      mechanical: String
    }
    socialDistancingMeasures: {
      tables: String
      plexiglass: String
    }
    hygieneMeasures: {
      handSanitizer: String
      disinfection: String
      physicalMenus: String
    }
    masks: String
    alcoholConsumption: String
    activities: {
      talking: String
      singing: String
      dancing: String
    }
    timeSpentAtVenue: Number
  }
}
type EditVenueArgs = {
  dispatchUser: DispatchUser
  setFieldError: (key: string, value: string) => void
  setSubmitting: (arg: boolean) => void
  values: EditVenueValues
}

export const EditVenueDetails = async ({
  dispatchUser,
  setFieldError,
  setSubmitting,
  values,
}: EditVenueArgs) => {
  try {
    // Here is the axios call for registering a venue

    const { data } = await axios.post(`${API_URL}auth/register`, values, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })

    dispatchUser({ type: 'SAVE_USER', payload: data?.user })

    setSubmitting(false)

    history.push('/search')
  } catch (err) {
    setFieldError('error:', err?.response?.data.message)
  }
}

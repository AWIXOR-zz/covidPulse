import history from 'helpers/history'
import axios from 'axios'
import setAuthToken from 'helpers/setAuthToken'
import storage from 'helpers/storage'
import { API_URL } from 'config'
import { DispatchUser } from 'features/auth/interfaces'

export type UserValues = {
  email: string
  password: string
  username?: string
}
export type VenueValues = {
  email: String
  password: String
  fullName: String
  phoneNumber: String
  fullAddress: String
  postcode: String
  city: String
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
type LoginSignupArgs = {
  dispatchUser: DispatchUser
  setFieldError: (key: string, value: string) => void
  setSubmitting: (arg: boolean) => void
  values: VenueValues
}
type LoginSigninArgs = {
  dispatchUser: DispatchUser
  setFieldError: (key: string, value: string) => void
  setSubmitting: (arg: boolean) => void
  values: any
}

export const login = async ({
  dispatchUser,
  setFieldError,
  setSubmitting,
  values,
}: LoginSigninArgs) => {
  try {
    console.log(values)

    // Here is the axios call for user login
    // const { data } = await axios.post(`${API_URL}auth/login`, JSON.stringify(values), {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   withCredentials: true,
    // })

    const { data } = await fetch(`${API_URL}auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        return data
      })

    // setAuthToken(data1.token)
    console.log(data)

    // dispatchUser({ type: 'SAVE_USER', payload: data?.user })

    // storage.set('token', data.token)
    setSubmitting(false)

    history.push('/')
  } catch (err) {
    setFieldError('email', err?.response?.data.message)
  }
}

export const register = async ({
  dispatchUser,
  setFieldError,
  setSubmitting,
  values,
}: LoginSignupArgs) => {
  try {
    console.log(values)

    // Here is the axios call for registering a venue

    const { data } = await axios.post(`${API_URL}auth/register`, values, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })

    setAuthToken(data.token)

    dispatchUser({ type: 'SAVE_USER', payload: data?.user })

    storage.set('token', data.token)
    setSubmitting(false)

    history.push('/')
  } catch (err) {
    setFieldError('email', err?.response?.data.message)
  }
}

export const logout = async (dispatch: DispatchUser) => {
  try {
    dispatch({ type: 'LOADING_TRUE' })
    dispatch({ type: 'LOGOUT' })

    storage.remove('token')
    setAuthToken(false)

    dispatch({ type: 'LOADING_FALSE' })

    history.push('/')
  } catch (err) {
    dispatch({ type: 'LOADING_FALSE' })
    console.log(err)
  }
}

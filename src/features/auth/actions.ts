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
  venueName: string
  description: string
  venueType: string

  venueCapacity: string
  capacityLimit: string
  indoorCapacity: string
  outdoorCapacity: string
  timeSpentAtVenue: number

  naturalVentilation: string
  mechanicalVentilation: string
  airCirculation: string

  tables: string
  tablesSeperation: string
  plexiglass: string

  handSanitizer: string
  disinfection: string
  physicalMenus: string
  masks: string

  talking: string
  singing: string
  dancing: string
  alcoholConsumption: string

  fullName: string
  email: string
  phoneNumber: string

  fullAddress: string
  postcode: string
  city: string

  password: string
  confirmPassword: string
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
  values: UserValues
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
    const { data } = await axios.post(`${API_URL}auth/login`, values, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    console.log(data)

    setAuthToken(data.token)
    console.log(data.token)

    dispatchUser({ type: 'SAVE_USER', payload: data?.user })

    storage.set('token', data.token)
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
    console.log(data)

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

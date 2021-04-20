import React, { Suspense, lazy } from 'react'
import Spinner from 'react-spinkit'
import UserProvider from 'features/auth/providers/UserProvider'

// import useUser from 'features/auth/hooks/useUser'
import GlobalStyle from 'ui/theme/global-style'
import { ThemeProvider } from 'styled-components'
import theme from 'ui/theme/theme'
import 'bootstrap/dist/css/bootstrap.min.css'
import { VenueProvider } from 'features/search/providers/VenueProvider'
import { API_URL } from 'config'
import axios from 'axios'

const Authenticated = lazy(() => import('./Authenticated'))
const Unauthenticated = lazy(() => import('./Unauthenticated'))

const Routes = () => {
  const user = axios.get(`${API_URL}auth/profile`)
  console.log(user)

  return user ? (
    <Suspense fallback={<Spinner name="wandering-cubes" color="aqua" />}>
      <Authenticated />
    </Suspense>
  ) : (
    <Suspense fallback={<Spinner name="wandering-cubes" color="black" />}>
      <Unauthenticated />
    </Suspense>
  )
}

const App = () => (
  <ThemeProvider theme={theme}>
    <VenueProvider>
      <UserProvider>
        <GlobalStyle />
        <Routes />
      </UserProvider>
    </VenueProvider>
  </ThemeProvider>
)

export default App

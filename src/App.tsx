import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider } from 'styled-components'
import { Router } from './Router/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import {MatchContextProvider} from './context/MatchContext'

export function App (){


  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MatchContextProvider>
          <Router />
        </MatchContextProvider>
        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}
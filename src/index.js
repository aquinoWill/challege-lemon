import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from './routes'
import { GlobalStyles } from './global.styled'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Router />
  </StrictMode>
)

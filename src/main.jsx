import React from 'react'
import ReactDOM from 'react-dom/client'

import Reset from './styles/generic/Reset.js'
import Base from './styles/element/Base.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { FruitProvider } from './context/fruitProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <FruitProvider>
        <App />
      </FruitProvider>
    </BrowserRouter>
  </React.StrictMode>
)

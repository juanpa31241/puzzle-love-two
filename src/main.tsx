import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StateProvider } from './context/StateContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateProvider>

      <App />
    </StateProvider>

  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

// Включаем темную тему для Tailwind
document.documentElement.classList.add('dark')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

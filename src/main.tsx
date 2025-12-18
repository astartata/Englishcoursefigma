import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

// 🔧 ВКЛЮЧАЕМ ТЁМНУЮ ТЕМУ (Figma Make / Tailwind ожидают этот класс)
document.documentElement.classList.add('dark')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

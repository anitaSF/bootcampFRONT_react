import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './scss/index.css'
import { BrowserRouter } from 'react-router-dom' // Modulo importado para trabajar con rutas internas al proyecto. Se debe llamar en el html de abajo como elemento <BrowserRouter></BrowserRouter> y englobar al componente general <App />

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

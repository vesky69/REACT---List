import React from 'react'
import ReactDOM from 'react-dom/client'
import Titulo from './componentes/Titulo.jsx'
import Checkbox from './componentes/checkbox.jsx'
import Add from './componentes/adicionar.jsx'
import ItemLista from './componentes/itemlista.jsx'
import Lista from './componentes/lista.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Lista />
  </React.StrictMode>,
)

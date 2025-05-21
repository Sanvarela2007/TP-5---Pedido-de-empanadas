import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario'
import Listado from './components/Listado/Listado'

function App() {

  const[pedidos, setPedidos] = useState(
    [
      
    ]
  )

  const agregarPedido = (nuevoPedido) => {
    setPedidos([...pedidos, nuevoPedido]);
  }

  return (
    <>
          <div class="container">

      <h1>Pedidos de empanadas</h1>
        <Formulario agregarPedido={agregarPedido}/>
        
        <Listado pedidos={pedidos}/>
      </div>
    </>
  )
}

export default App

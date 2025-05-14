import { useState } from 'react'
import './Formulario.css'

const Formulario = ({agregarPedido}) => {

  const [datos, setDatos] = useState(
    {
      nombre: '',
      sector: '', 
      gusto: '',
      cantidad: 0
    }
  )

  const cambios = (e) =>
  {
    setDatos({...datos, [e.target.name] : e.target.value})
  }


  
  const enviar = (e) =>
  {
    e.preventDefault()
    if(datos.nombre == '' || datos.sector == '' || datos.gusto == '' || datos.cantidad == '')
    {
      alert("Todos los campos son obligatorios")
      return;
    }

    const nuevoPedido = {
      id: Date.now(), // me recomendaron utilizar esto
      ...datos,
    }

    if(confirm("¿Desea agregar el pedido?"))
    {
    agregarPedido(nuevoPedido)

    setDatos({
      nombre: '',
      sector: '', 
      gusto: '',
      cantidad: ''
    })
  }
}
  return (
    <div class="one-half column">
      <h2>Formulario</h2>
      <form onSubmit={enviar}>
      <label>Nombre</label>
      <input type="text" name="nombre" class="u-full-width" placeholder="Nombre" value={datos.nombre} onChange={cambios}/>
      <label>Sector</label>
      <select id="sector" name="sector" value={datos.sector} onChange={cambios}>
      <option value="" disabled selected>Seleccione sector</option>
        <option value="sistemas">Sistemas</option>
        <option value="finanzas">Finanzas</option>
        <option value="ventas">Ventas</option>
        <option value="recursos_humanos">Recursos Humanos</option>
        <option value="soporte">Soporte</option>
        <option value="deposito">Depósito</option>
      </select>
      <label>Gusto</label>
      <select id="gusto" name="gusto" value={datos.gusto} onChange={cambios}>
      <option value="" disabled selected>Seleccione gusto</option>
        <option value="carne">Carne</option>
        <option value="pollo">Pollo</option>
        <option value="jamon_queso">Jamón y Queso</option>
        <option value="caprese">Caprese</option>
        <option value="humita">Humita</option>
        <option value="verdura">Verdura</option>
      </select>
      <label>Cantidad</label>
      <input type="number" name="cantidad" class="u-full-width" value={datos.cantidad} onChange={cambios}/>
      <button type="submit" class="u-full-width button-primary">Agregar pedido</button>
      </form>
    </div>
  )

}

export default Formulario

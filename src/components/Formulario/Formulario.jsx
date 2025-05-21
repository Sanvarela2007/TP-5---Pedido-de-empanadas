import { useState } from 'react'
import './Formulario.css'

const Formulario = ({agregarPedido}) => {

  const [datos, setDatos] = useState(
    {
      nombre: '',
      sector: '', 
      gustos: [{ gusto: '', cantidad: 0 }]
    }
  )

  const cambios = (e) =>
  {
    setDatos({...datos, [e.target.name] : e.target.value})
  }

  const handleGustoChange = (e, index) => {
    const nuevosGustos = [...datos.gustos];
    nuevosGustos[index][e.target.name] = e.target.value;
    setDatos({ ...datos, gustos: nuevosGustos });
  };
  
  const agregarOtroGusto = () => {
    setDatos({
      ...datos,
      gustos: [...datos.gustos, { gusto: '', cantidad: 0 }]
    });
  };
  
  
  const enviar = (e) => {
    e.preventDefault();
    const { nombre, sector, gustos } = datos;
  
    if (!nombre || !sector || gustos.some(g => !g.gusto || !g.cantidad)) {
      alert("Todos los campos son obligatorios");
      return;
    }
  
    const nuevoPedido = {
      nombre,
      sector,
      gustos: gustos.map(g => ({
        gusto: g.gusto,
        cantidad: parseInt(g.cantidad)
      }))
    };
  
    if (confirm("¿Desea agregar el pedido?")) {
      agregarPedido(nuevoPedido);
      setDatos({
        nombre: '',
        sector: '',
        gustos: [{ gusto: '', cantidad: 0 }]
      });
    }
  };
  
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
      <label>Gustos</label>
{datos.gustos.map((item, index) => (
  <div key={index}>
    <select
      name="gusto"
      value={item.gusto}
      onChange={(e) => handleGustoChange(e, index)}
    >
      <option value="" disabled>Seleccione gusto</option>
      <option value="carne">Carne</option>
      <option value="pollo">Pollo</option>
      <option value="jamon_queso">Jamón y Queso</option>
      <option value="caprese">Caprese</option>
      <option value="humita">Humita</option>
      <option value="verdura">Verdura</option>
    </select>

    <input
      type="number"
      name="cantidad"
      value={item.cantidad}
      onChange={(e) => handleGustoChange(e, index)}
    />
  </div>
))}

<button type="button" onClick={agregarOtroGusto}>
  Agregar empanada
</button>

<button type="submit" className="u-full-width button-primary">
  Finalizar pedido
</button>

      </form>
    </div>
    
  )

}

export default Formulario

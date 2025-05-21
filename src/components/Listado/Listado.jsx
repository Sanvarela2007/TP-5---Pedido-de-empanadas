import Pedido from '../Pedido/Pedido.jsx'

import './Listado.css'

const Listado = ({ pedidos }) => {
    const totales = {
      carne: 0,
      pollo: 0,
      jamon_queso: 0,
      caprese: 0,
      humita: 0,
      verdura: 0
    };
  
    pedidos.forEach(pedido => {
      pedido.gustos.forEach(g => {
        totales[g.gusto] += g.cantidad;
      });
    });
  
    return (
      <div>
        <h2>Totales por gusto</h2>
        
        <ul>Carne: {totales.carne}</ul>
        <ul>Pollo: {totales.pollo}</ul>
        <ul>Jamón y Queso: {totales.jamon_queso}</ul>
        <ul>Caprese: {totales.caprese}</ul>
        <ul>Humita: {totales.humita}</ul>
        <ul>Verdura: {totales.verdura}</ul>
        
        <h2>Pedidos por persona</h2>
{pedidos.map((pedido, i) => (
  <div key={i} className="pedido-persona">
    <h3>{pedido.nombre} - {pedido.sector}</h3>
    <ul>
      {pedido.gustos.map((g, j) => (
        <li key={j}>{g.cantidad} de {g.gusto}</li>
      ))}
    </ul>
  </div>
))}

      </div>
    );
  };
  
export default Listado

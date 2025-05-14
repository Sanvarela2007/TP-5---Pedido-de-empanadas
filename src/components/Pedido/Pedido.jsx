import './Pedido.css'


const Pedido = ({nombre, sector, gusto, cantidad}) => {
  return (
    <div class="pedido">
        <p >Nombre: <span>{nombre} </span></p>
        <p>Sector: <span>{sector}</span></p>
        <p>Gusto: <span>{gusto}</span></p>
        <p>Cantidad: <span>{cantidad}</span></p>
      </div>
  );
}

export default Pedido;

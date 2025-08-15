import { useContext} from "react";
import {ItemCount} from './ItemCount'
import CartContext from "../providers/CartContext";

export function ItemDetail ({detalleDelProducto}) {

    const {addToCart , Cart} = useContext(CartContext)

    if (!detalleDelProducto) 
        return <p>Cargando producto...</p>;

    const agregarCarrito = () => {
        addToCart(detalleDelProducto)
    }


    
    return (
        <>  
            <img src={detalleDelProducto.imagen } alt="imagen del producto" />
            <h3>{detalleDelProducto.nombre}</h3>
            <p>{detalleDelProducto.precio}</p>
            <p>{detalleDelProducto.stock}{detalleDelProducto.stock > 1 ? "unidades" : "unidad"}</p>
            <h5>DETALLE DEL PRODUCTO</h5>
            <ItemCount/>
            <button onClick={agregarCarrito} className="btn btn-primary">AGREGAR AL CARRITO</button>
        </>
    )
}

export default ItemDetail
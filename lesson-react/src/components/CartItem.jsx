import { useContext } from "react"
import CartContext from "../providers/CartContext"


    export function CartItem ({Item}) {

    const {removeFromCart} = useContext(CartContext)


    return (
        <>
        <div className="card" style={{width: '18rem'}}>
            <img src={Item.imagen} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{Item.nombre}</h5>
                <p className="card-text">${Item.precio}</p>
                <p className="card-text">Stock{Item.stock}{Item.stock > 1 ? "unidades" : "unidad"}</p>
                <button onClick={() => removeFromCart(Item.id)} className="btn btn-primary">ELIMINAR PRODUCTO</button>
            </div>
        </div>
    </>
    )

}

export default CartItem


import { useState } from "react"

import { NavLink } from "react-router-dom"
import {Cart} from './Cart'

export function CartWidget () {

    const [carritoDeCompras, setCarritoDeCompras] = useState(null)

    


    return (
        <>
            <img alt="Carrito" imagen= "carrito"/>
        </>
    )
}

export default CartWidget
import { useContext, useState } from 'react';
import CartItem from './CartItem'
import CartContext from '../providers/CartContext';

export function Cart () {
    
    const {cart , removeFromCart} = useContext(CartContext);

    
    return (
        <>
            <h2>Carrito</h2>
            <div>
            </div>
        <CartItem/>
        </>
    )

}
export default Cart















import {useContext, useState} from 'react';
import CartItem from './CartItem'
import CartContext from '../providers/CartContext';
import CheckoutForm from './CheckoutForm';

export function Cart () {
    
    const {cart} = useContext(CartContext);

    return (
        <>
            <h2>Carrito</h2>
            <div>
                {cart.map((producto) => {
                    return(
                    <CartItem key={producto} Item={producto}/>
                    )
                })}

            </div>
            <CheckoutForm/>
        </>
    )

}
export default Cart















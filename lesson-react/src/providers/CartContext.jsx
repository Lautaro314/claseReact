import {createContext, useState} from "react";
//1)
//Esta variable es el contexto
export const CartContext = createContext();



//2)
//Esta variable es el componenete provider
const CartProvider = CartContext.Provider;



//3)
//Este es el componente envoltorio
export function CustomCartContext ({children}) {

    const [producto , setProducto] = useState([])

    //Agregar al carrito
    const addToCart = (nuevoProducto) => {
        setProducto([...producto , nuevoProducto])
    }


    //Eliminar al carrito
    const removeFromCart = (id) => {
        //setProducto(producto.filter(a => a.id !== producto.id))
        setProducto(producto.filter((p) => p.id !== id))
    }

    const vaciarCarrito = () => {
        setProducto([])
    }

    const totalCarrito = () => {
        return producto.reduce((acc , item) => acc + item.precio , 0)
    }


    //4) el valor del contexto
    const valorContexto = {
        cart:producto,
        addToCart,
        removeFromCart,
        vaciarCarrito,
        totalCarrito,
    }





    return  (
        <>
            <CartProvider value={valorContexto}>
                {children}
            </CartProvider>
        </>
    )

}

export default CartContext
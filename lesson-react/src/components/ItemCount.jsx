import { useState } from "react"

export function ItemCount () {

    const [contador , setContador] = useState(1);

    const stock = 10

    const incrementClick = () => {

        if (contador < stock){
        
            setContador(contador + 1)
        
        }
    }
    const decrementClick = () => {

        setContador(contador - 1)
    
    }


    return (
        <>  
            <h3>Unidades:{contador}</h3>
            <button onClick={incrementClick}>+1</button>
            <button onClick={decrementClick}>-1</button>
        </>
    )

}

export default ItemCount
import { useState } from 'react';
import {Item} from './Item';

export function ItemList ({products}){

    return( 

    <>
    <div>
        <h2>MENU</h2>
        <h2>CATALOGO:</h2>
    </div>
    <div>
        {products.map(producto =>(
            <Item key ={producto.id} item={producto}/>
        ))}
    </div>
    </>
    )
}

export default ItemList
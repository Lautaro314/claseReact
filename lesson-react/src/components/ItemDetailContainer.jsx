import {useEffect, useState} from "react"
import {useParams } from "react-router-dom";
import {ItemDetail} from './ItemDetail';

export function ItemDetailContainer () {

const {id}= useParams();
const idProducto = parseInt(id)

const [api , setApi] = useState(null);

    useEffect (() => {

        fetch ('/producto.json')
        .then(res => res.json())
        .then(data => {
        if (id) {
            const filtrado = data.find((producto) => producto.id === idProducto)
            setApi(filtrado);
            
        } 
    })

    .catch(error => console.error("Error al cargar producto.json:", error));

},[id]);

    return (
        <>
            <ItemDetail detalleDelProducto ={api}/>
        </>
    )

}
export default ItemDetailContainer



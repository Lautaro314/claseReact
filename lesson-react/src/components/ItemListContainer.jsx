import { useEffect, useState } from "react"
import {ItemList} from './ItemList'
import { useParams } from "react-router-dom"



export function ItemListContainer ({name}) {

const {id} = useParams()

const [productos , setProductos] = useState([])

useEffect(() => {
    
    fetch ('/producto.json')
    .then(res => res.json())
    .then(data => {
        if (id) {
            const filtrado = data.filter (producto => producto.categoria === id)
            setProductos(filtrado)
        } else{
            setProductos(data)
        }
    })

},[id]);



    return (
        <>
            <h2>TODO LOS PRODUCTOS</h2>
            <div className="renderProductos">
            <ItemList itemProducto ={productos}/>
            </div>

        </>
    )

}


export default ItemListContainer

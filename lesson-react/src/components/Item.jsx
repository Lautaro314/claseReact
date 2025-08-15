//acceso a la plaforma de firebase en google
import {app} from "../firebaseConfig";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import CartContext from "../providers/CartContext";


export function Item ({item}) {

    const {addToCard} = useContext(CartContext)


    return (
        <>
            <div className="renderProducto">
                <div className="card" style={{width: '18rem'}}>
                    <img src={item.imagen} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">${item.nombre}</h5>
                        <p className="card-text">${item.precio}</p>
                        <p className="card-text" >Stock{item.stock}</p>
                        <NavLink to = {`/item/${item.id}`} className="btn btn-primary">VER DETALLE</NavLink>
                    </div>
                </div>
            </div>
        </>

)

}



export default Item
















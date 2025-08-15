import { useEffect, useState } from "react"
import {CamperasDeCueroItem} from "./CamperasDeCueroItem"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../firebaseConfig";

export function CamperasDeCuero () {

    const [campera, setCampera] = useState([]);

    useEffect (() => {

        const db = getFirestore(app);
        const productCollection = collection(db ,"productos");

        const productosExtraidos = query(productCollection , where ("categoria" , "==" , "camperas"))

        getDocs(productosExtraidos)
        .then((respuesta) => {
            const productosFiltrados = respuesta.docs.map((doc) => ({

                id: doc.id,
                ...doc.data(),

            }))

            setCampera(productosFiltrados);
        })
        .catch((error) => {
            
        })

    },[])

    return (
        <>
            <CamperasDeCueroItem Item = {campera}/>
        </>
    )

}

export default CamperasDeCuero
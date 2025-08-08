import { useEffect, useState } from "react"
import {RemerasItem} from "./RemerasItem"
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"
import { app } from "../firebaseConfig"

export function Remeras () {

    const [remeras , setRemeras] = useState([])

    useEffect(() => {

        const db = getFirestore(app);
        const productCollection = collection(db , "productos");

    //filtrar las categorias remeras

    const productosExtraidos = query(productCollection , where("categoria" , "==" , "remeras"));

    getDocs (productosExtraidos)
    
    .then((respuesta) => {

        const productosFiltrados = respuesta.docs.map((doc) => ({

        id: doc.id,
        ...doc.data(),   

        }));

        setRemeras(productosFiltrados)

    })

    .catch ((error) => {
        console.error("❌ Error al traer productos:", error);
    })
    
    },[])

    return (
        <>

        <RemerasItem remeras = {remeras} />

        </>
    )

}



export default Remeras
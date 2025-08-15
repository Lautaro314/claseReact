import { useEffect, useState } from "react"
import { getFirestore , getDocs, collection, query , where } from "firebase/firestore";
import { app,} from "../firebaseConfig";
import {JeansItem} from "./JeansItem";

export function Jeans () {

    const [jeans , setJeans] = useState([]);


    

    useEffect  (() => {
        const db = getFirestore(app);
        const productCollection = collection(db , "productos");


        const productosExtraidos = query(productCollection , where ("categoria" , "==" , "jeans"))
        
        
        getDocs(productosExtraidos)
            .then((respuesta) => {

            const productosFiltrados = respuesta.docs.map((doc) => ({
            
            id: doc.id,
            ...doc.data(),

            }));

            setJeans(productosFiltrados)
        })

        .catch ((error) => {

        })

    },[]);




    return (
        <>

            <JeansItem jeans={jeans}/>

        </>
    )

}



export default Jeans

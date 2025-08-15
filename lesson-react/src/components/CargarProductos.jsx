import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../firebaseConfig";



export function CargarProductos () {

const [productos , setProductos] = useState([]);

const db = getFirestore(app);
    




useEffect(() => {
    fetch("/producto.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      //.catch((err) => console.error("❌ Error al cargar el JSON:", err));
  }, []);


  const handleClick = async () => {
    try {
      const productCollection = collection(db, "productos");
      for (let producto of productos) {
        await addDoc(productCollection, producto);
      }
    } catch (err) {
    }
  };
    
  
  return (
        <>
        </>
    )

}

export default CargarProductos
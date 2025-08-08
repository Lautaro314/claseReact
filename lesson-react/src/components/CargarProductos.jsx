import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../firebaseConfig";



export function CargarProductos () {

const [productos , setProductos] = useState([]);
//acceso a la base de datos
const db = getFirestore(app);
    
//de toda la base de datos tengo acceso a la coleccion da la base de datos


//le hago la consulta a la base de dato para guardar datos
useEffect(() => {
    fetch("/producto.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("❌ Error al cargar el JSON:", err));
  }, []);

  // 2. Subir productos a Firestore
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
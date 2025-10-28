import { useState, useContext } from 'react';
import  CartContext  from '../providers/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';


export function CheckoutForm () {

const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext);
const [nombre, setNombre] = useState('');
const [email, setEmail] = useState('');
const [telefono, setTelefono] = useState('');
const [orderId, setOrderId] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!nombre.trim() || !email.includes('@') || telefono.length< 8) {

        return;
    }

    
    const orden = {
        comprador: { nombre, email, telefono },
        items: cart,
        total: totalCarrito(),
        fecha: serverTimestamp()
    };

    
    try {
        console.log("Carrito actual antes de guardar:" , cart);
        const ordersRef = collection(db, 'orders');
        const docRef = await addDoc(ordersRef, orden);

        setOrderId(docRef.id);
        vaciarCarrito();
    } catch (error) {
    }
};


    if (orderId) {
        console.log(orderId);
        
        return (
            <div style={{textAlign: 'center'}} >
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
    );
}


    return(
        <>
            
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                    <button type="submit">Finalizar compra</button>
                </form>        
        </>
)}


export default CheckoutForm;
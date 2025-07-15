export function ItemDetail ({detalleDelProducto}) {

    if (!detalleDelProducto) 
        return <p>Cargando producto...</p>;
    
    return (
        <>
            <h3>{detalleDelProducto.nombre}</h3>
            <p>{detalleDelProducto.precio}</p>
            <h5>DETALLE DEL PRODUCTO</h5>
        </>
    )
}

export default ItemDetail

export function Item (products) {

    
    
    return (
        <>
        <nav>
            
        </nav>
        <div className="renderProducto">
                {products.map(producto => <div className="card" key={producto.id} style={{width: '18rem'}}>
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">${producto.nombre}</h5>
                            <p className="card-text">${producto.precio}</p>
                            <a href="#" className="btn btn-primary">VER DETALLE</a>
                        </div>
                </div>)}
        </div>
    )
    </>
    
)


}

export default Item
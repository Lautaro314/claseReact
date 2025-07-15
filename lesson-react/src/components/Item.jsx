import { NavLink, useParams } from "react-router-dom"

export function Item ({item}) {

const {id} = useParams();
    
    return (
        <>
        <div className="renderProducto">
                <div className="card" style={{width: '18rem'}}>
                    <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">${item.nombre}</h5>
                        <p className="card-text">${item.precio}</p>
                        <NavLink to = {`/item/${item.id}`} className="btn btn-primary">VER DETALLE</NavLink>
                    </div>
                </div>
            </div>
    
    </>
    
)
}

export default Item
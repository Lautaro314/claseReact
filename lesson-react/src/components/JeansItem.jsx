import { NavLink, useParams } from "react-router-dom";

export function JeansItem ({jeans}) {


    
    return(
        <>
            {jeans.map ((producto) => {
            return(
                <div key={producto.id} className="card" style={{width: '18rem'}}>
                    <img src={producto.imagen} className="card-img-top" alt={producto.nombre}></img>
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">${producto.precio}</p>
                    <NavLink to={`/item/${producto.id}`}><button className="btn btn-primary">VER DETALLE</button></NavLink>
                </div>
            </div>            
            );  
            })}    
        </>
    )


}


export default JeansItem
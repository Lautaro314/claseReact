import logo from '../assets/logo.png';
import carrito from '../assets/carrito.png'
import { NavLink } from "react-router";

export function Navbar () {

    const nombreDelComercio = "THE POWER";

    return (<>
            <header className="header">
                <img src= {logo} alt="Logo del shop" />
                <h1>{nombreDelComercio}</h1>
                <nav>
                    <NavLink to= "/Landing">HOME</NavLink>
                    <NavLink to= "/Categorias">VER CATEGORIAS</NavLink>
                </nav>
                <img className='carrito' src= {carrito} alt="Carrito de compras" />
            </header>
        </>)
}


export default Navbar
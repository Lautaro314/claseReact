import logo from '../assets/logo.png';
import carrito from '../assets/carrito.png'
import { NavLink } from "react-router-dom";
import { useContext, useState } from 'react';
import CartWidget from './CartWidget';



export function Navbar () {

    const nombreDelComercio = "THE POWER";

    


    return (
        <>
            <header className="header">
                <img src= {logo} alt="Logo del shop" />
                    <h1><NavLink className={"logo"} to='/'>{nombreDelComercio}</NavLink></h1>
                    <nav>
                        <NavLink to='/jeans'>JEANS</NavLink>
                        <NavLink to='/Remeras'>REMERAS</NavLink>
                        <NavLink to='/CamperasDeCuero'>CAMPERAS DE CUERO</NavLink>
                    </nav>
                    <NavLink className={'carritoDeCompra'} to='/Cart'><img src={carrito} className='carrito' alt="Carrito de compras"></img></NavLink>
            </header>      
        </>

    )
}


export default Navbar
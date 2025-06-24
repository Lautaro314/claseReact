import {Navbar} from './components/Navbar.jsx';
import {CartWidget} from './components/CartWidget.jsx';
import {ItemListContainer} from './components/ItemListContainer.jsx';
import './App.css';



export function App() {

  const nombreDelUsuario = "Lautaro";

  return (
    <>
      <Navbar>
        <CartWidget/>
      </Navbar>
      <ItemListContainer name= {nombreDelUsuario}/>
    </>
  )
}

export default App







/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
//import reactLogo from './assets/logo.jpg'

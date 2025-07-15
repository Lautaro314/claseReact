import {Navbar} from './components/Navbar.jsx';
import {CartWidget} from './components/CartWidget.jsx';
import {ItemListContainer} from './components/ItemListContainer.jsx';
import {Item} from './components/Item.jsx';
import {ItemDetailContainer} from './components/ItemDetailContainer.jsx';
import {ItemList} from './components/ItemList.jsx';
import {ItemDetail} from './components/ItemDetail.jsx';
import {Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';



export function App() {

  const nombreDelUsuario = "Lautaro";



  return (
    <>
      <Navbar>
        <CartWidget/>
      </Navbar>

        <Routes>
          <Route path='/' element= {<ItemListContainer/>}></Route>
          <Route path='/category/:id' element={<ItemListContainer/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        </Routes>

    </>  
)
}

export default App







/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
//import reactLogo from './assets/logo.jpg'

/*
  const arrayProductos = {
jeans: [
    {
    id: 1,
    nombre: "jean baggy",
    precio: 15000,
    categoria: "jeans"
    },
    {
    id: 2,
    nombre: "jean cargo",
    precio: 13000,
    categoria: "jeans"
    }
],
remeras: [
    {
    id: 1,
    nombre: "remera overside",
    precio: 12000,
    categoria: "remeras"
    },
    {
    id: 2,
    nombre: "remera overside",
    precio: 12000,
    categoria: "remeras"
    },
    {
    id: 3,
    nombre: "remera overside",
    precio: 12500,
    categoria: "remeras"
    }
],
camperas: [
    {
    id: 1,
    nombre: "campera de cuero",
    precio: 21000,
    categoria: "camperas"
    },
    {
    id: 2,
    nombre: "campera de cuero",
    precio: 25000,
    categoria: "camperas"
    },
    {
    id: 3,
    nombre:"camperas de cuero",
    precio: 26000,
    categoria:"camperas"
    }
]
}*/
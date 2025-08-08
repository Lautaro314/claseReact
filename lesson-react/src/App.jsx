import {Navbar} from './components/Navbar.jsx';
import {CartWidget} from './components/CartWidget.jsx';
import {ItemListContainer} from './components/ItemListContainer.jsx';
import {ItemDetailContainer} from './components/ItemDetailContainer.jsx';
import {Jeans} from './components/Jeans.jsx';
import {Remeras} from './components/Remeras.jsx';
import {CamperasDeCuero} from './components/CamperasDeCuero.jsx'
import {Cart} from './components/Cart.jsx'
import {Routes, Route} from "react-router-dom"
import {CargarProductos} from './components/CargarProductos.jsx'
import './App.css';
import "./firebaseConfig.js"



export function App() {

  const nombreDelUsuario = "Lautaro";



  return (
    <>
      <Navbar>
        <CartWidget/>
      </Navbar>
      <CargarProductos/>

        <Routes>
          <Route path='/' element= {<ItemListContainer/>}></Route>
          <Route path='/category/:id' element={<ItemListContainer/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/jeans' element={<Jeans/>}></Route>
          <Route path='/Remeras' element={<Remeras/>}></Route>
          <Route path='/CamperasDeCuero' element={<CamperasDeCuero/>}></Route>
          <Route path='/cart'element ={<Cart/>}></Route>
        </Routes>

    </>  
)
}

export default App
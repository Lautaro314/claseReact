import Item from "./Item"

export function ItemList ({products}){

    return( 

    <>
    <div>
        <h2>MENU</h2>
        <h2>CATALOGO:</h2>
        <Item itemProducto = {products}/>
    </div>
    </>
    )
}

export default ItemList
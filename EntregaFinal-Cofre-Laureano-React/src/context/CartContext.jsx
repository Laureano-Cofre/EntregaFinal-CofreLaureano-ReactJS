import { createContext } from "react";


//Creamos un contexto
const CartContext = createContext()

//Envolvemos todos los componentes dentro de este 
const CartProvider = () => {

    return (
        <div></div>
    )
}

export { CartProvider, CartContext }
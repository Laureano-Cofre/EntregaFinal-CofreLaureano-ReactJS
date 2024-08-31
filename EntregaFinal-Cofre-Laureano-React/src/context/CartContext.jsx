import { createContext } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const saludo = "Hola Loco!"

    const saludando = () => {
        alert("Hola mundo!")
    }
    
    return(
        <CartContext.Provider value = { { saludo, saludando}}>
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext}
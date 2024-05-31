import React, { createContext, useState } from 'react';

// Create a context for cart items
export const CartContext = createContext();

// Create a provider component to manage the cart state
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        alert(`${item.title} is added, please fill the next step.`);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

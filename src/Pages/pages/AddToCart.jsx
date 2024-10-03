import React, { useState } from "react";
import '../../Css/Cart.css'

const AddCart = () => {
    const [cartItems, setCartItems] = useState([]);



    // Function to add items to the cart
    const addToCart = (juice) => {
        const existingItem = cartItems.find((item) => item.id === juice.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === juice.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...juice, quantity: 1 }]);
        }
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Juice Center Menu</h1>

            {/* Juice List */}
        

            {/* Cart Items */}
            <div className="cart">
                <h2 className="cart-heading">Cart</h2>
                {cartItems.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <span>{item.name}</span>
                                <span>Quantity: {item.quantity}</span>
                                <span>Total: Rs. {item.quantity * item.price}</span>
                            </li>
                        ))}
                    <button>Place Order</button>
                    </ul>
                )}
            </div>

            
        </div>
    );
};

export default AddCart;

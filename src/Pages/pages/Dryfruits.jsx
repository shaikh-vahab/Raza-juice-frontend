import React, { useEffect, useState } from 'react';
import '../../Css/Dryfruites.modules.css';
import AddCart from './AddToCart'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dryfruits = () => {
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('/Raza/DryFruit').then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.log(`error occurred during Dryfruit data fetch`);
        });
    }, []);

    const addToCart = (item) => {
        setCartItems(prevCartItems => {
            const itemExists = prevCartItems.find(cartItem => cartItem.id === item.id);
            if (itemExists) {
                return prevCartItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
                        : cartItem
                );
            } else {
                return [...prevCartItems, { ...item, quantity: 1 }];
            }
        });
        alert(`${item.DryFruitName} is added, please fill the next step.`);
    };

    return (
        <>
            <hr />
            <center><h1 className='Heading-dry'>Dryfruit column</h1></center>

            <div className="main-Dry-card">
                {data.map((element) => (
                    <div className="card-dryfruite" key={element.id}>
                        <img src={element.Image} alt={"Not Found"} />
                        <h2>{element.DryFruitName}</h2>
                        <p>({element.Quantity})</p>
                        <p className='Rs'>Rs:- {element.Price} </p>
                        {/* <button className='byu-now' onClick={() => addToCart(element)}>Buy Now</button> */}
                     <Link to={'/MakeReservation'}>   <button className='byu-now'>Buy Now</button></Link>

                    </div>
                ))}
            </div>

            {cartItems.length > 0 && <AddCart cartItems={cartItems} />}
        </>
    );
};

export default Dryfruits;

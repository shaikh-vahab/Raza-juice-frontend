import React, { useEffect, useState } from 'react';
import '../../Css/AddCart.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCart = ({ cartItems }) => {
    const [data, setData] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        axios.get('/Raza/DryFruit').then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.log(`error occurred during Dryfruit data fetch`);
        });
    }, []);

    useEffect(() => {
        const initialQuantities = {};
        cartItems.forEach(item => {
            initialQuantities[item.id] = item.quantity || 1;
        });
        setQuantities(initialQuantities);
    }, [cartItems]);

    const navigate = useNavigate();

    const increment = (id) => {
        setQuantities(prevState => ({
            ...prevState,
            [id]: (prevState[id] || 0) + 1
        }));
    };

    const decrement = (id) => {
        if (quantities[id] > 1) {
            setQuantities(prevState => ({
                ...prevState,
                [id]: (prevState[id] || 0) - 1
            }));
        }
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += (item.Price * (quantities[item.id] || 1));
        });
        return totalPrice;
    };

    return (
        <>
            {cartItems.map((item) => (
                <div key={item.id} className="mainDIv">
                    <div>
                        <img className='CartImg' src={item.Image} alt={'Not Found'} />
                    </div>
                    <div className='Incre-Decre'>
                        <button onClick={() => decrement(item.id)}>-</button>
                        <h3>{quantities[item.id]}</h3>
                        <button onClick={() => increment(item.id)}>+</button>
                    </div>
                    <div>
                        <h2> ₹ {item.Price}</h2>
                    </div>
                    <div className='btns'>
                        <button>Delete Item X</button>
                        <button onClick={() => navigate('/Dryfruits')}>check Item 🔙</button>
                    </div>
                    <div>
                        <h2>Total Price: ₹  {calculateTotalPrice()}</h2>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AddCart;

import React, { useEffect, useState } from "react";
import '../../Css/Menus.css'; // Importing the external CSS

const Menus = () => {
    const [juices, setJuices] = useState([]);

    // Juice data (hardcoded for now, but can be fetched from API or JSON file)
    const juiceData = [
        { "id": 1, "name": "Orange Juice", "priceFull": 50, "priceHalf": 30 },
        { "id": 2, "name": "Mango Juice", "priceFull": 60, "priceHalf": 35 },
        { "id": 3, "name": "Apple Juice", "priceFull": 70, "priceHalf": 40 },
        { "id": 4, "name": "Grape Juice", "priceFull": 55, "priceHalf": 32 },
        { "id": 5, "name": "Pineapple Juice", "priceFull": 65, "priceHalf": 38 },
        { "id": 6, "name": "Watermelon Juice", "priceFull": 50, "priceHalf": 30 },
        { "id": 7, "name": "Papaya Juice", "priceFull": 60, "priceHalf": 35 },
        { "id": 8, "name": "Lemon Juice", "priceFull": 45, "priceHalf": 25 },
        { "id": 9, "name": "Strawberry Juice", "priceFull": 80, "priceHalf": 45 },
        { "id": 10, "name": "Guava Juice", "priceFull": 55, "priceHalf": 32 },
        { "id": 11, "name": "Pomegranate Juice", "priceFull": 90, "priceHalf": 50 },
        { "id": 12, "name": "Carrot Juice", "priceFull": 40, "priceHalf": 20 },
        { "id": 13, "name": "Banana Shake", "priceFull": 85, "priceHalf": 45 },
        { "id": 14, "name": "Coconut Water", "priceFull": 35, "priceHalf": 20 },
        { "id": 15, "name": "Mixed Fruit Juice", "priceFull": 100, "priceHalf": 55 },
        { "id": 16, "name": "Kiwi Juice", "priceFull": 90, "priceHalf": 50 },
        { "id": 17, "name": "Chikoo Shake", "priceFull": 75, "priceHalf": 40 },
        { "id": 18, "name": "Blueberry Juice", "priceFull": 95, "priceHalf": 55 }
    ];

    // Fetch the juice data
    useEffect(() => {
        setJuices(juiceData);
    }, []);

    return (
        <div className="menu-container">
            <h1 className="menu-title">Juice Center Menu</h1>

            <div className="menu-list">
                {juices.map((juice) => (
                    <div key={juice.id} className="menu-item">
                        <div className="juice-name">
                            {juice.name}
                        </div>
                        <div className="juice-details">
                            <div>Full: {juice.priceFull} Rs.</div>
                            <div>Half: {juice.priceHalf} Rs.</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
};

export default Menus;

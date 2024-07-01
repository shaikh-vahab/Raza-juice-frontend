import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../../Css/MakeReservation.modules.css';

function MakeReservation() {
    const [items, setItems] = useState([{ id: 1, name: '' }]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        date: '',
        time: '',
        email: '',
        phoneNumber: '',
    });

    const handleAddItem = () => {
        setItems([...items, { id: items.length + 1, name: '' }]);
    };

    const handleRemoveItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleItemChange = (id, value) => {
        const newItems = items.map(item =>
            item.id === id ? { ...item, name: value } : item
        );
        setItems(newItems);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            date: formData.date,
            time: formData.time,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            items: items.map(item => item.name).join(', '),
        };

        emailjs.send('shaikhvahab97@gmail.com', 'shaikhvahab97@gmail.com', templateParams, 'shaikhvahab97@gmail.com')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Order sent successfully!');
            }, (error) => {
                console.error('FAILED...', error);
                alert('Error sending order.');
            });
    };

    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className="banner">
                    <img className="Img-glass" src="/glass.png" alt="" width="300px" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE AN ORDER</h1>
                        <p> Big Order Please Call Me <b>(+91) 9175237382</b> </p>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required />
                                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleInputChange} />
                                <input type="time" name="time" placeholder="Time" value={formData.time} onChange={handleInputChange} />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Email" className="email_tag" value={formData.email} onChange={handleInputChange} required />
                                <input type="number" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} required />
                            </div>
                            <div>
                                {items.map((item, index) => (
                                    <div key={item.id} style={{ display: 'flex', marginBottom: '10px' }}>
                                        <input
                                            type="text"
                                            name={`item${item.id}`}
                                            placeholder={`Item Name ${index + 1}`}
                                            value={item.name}
                                            onChange={(e) => handleItemChange(item.id, e.target.value)}
                                            required
                                        />
                                        {items.length === index + 1 ? (
                                            <div className="Plus-btn">
                                                <button type="button" onClick={handleAddItem}>+</button>
                                            </div>
                                        ) : (
                                            <div className="Minus-btn">
                                                <button type="button" onClick={() => handleRemoveItem(item.id)}>-</button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button type="submit">Get Order NOW <span></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MakeReservation;

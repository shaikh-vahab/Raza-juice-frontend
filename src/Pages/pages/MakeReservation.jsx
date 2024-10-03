import React, { useState } from 'react';
import '../../Css/MakeReservation.css';
import Swal from 'sweetalert2';

function MakeReservation() {
    const [order, setOrder] = useState(false); // Assuming 'order' tracks order status

    const submits = (event) => {
        event.preventDefault(); // Prevent default form submission

        if (order !== true) {
            Swal.fire({
                title: "Order Successfully !",
                text: "For any queries or discussion, you can call +91 9175237382!",
                icon: "success"
            });
            // Reset form or handle order state here if needed
        } else {
            Swal.fire({
                title: "Order Failed!",
                text: "Please try again.",
                icon: "error"
            });
        }
    };

    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className="banner">
                    <img className="Img-glass" src="/glass.png" alt="" width={'50px'} />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE AN ORDER</h1>
                        <p>Big Order? Send us on WhatsApp <b>(+91) 9175237382</b></p>

                        <form onSubmit={submits}>
                            <div>
                                <input type="text" name="firstName" placeholder="First Name" required />
                                <input type="text" name="lastName" placeholder="Last Name" />
                            </div>
                            <div>
                                <input type="date" name="date" placeholder="Date" required />
                                <input type="time" name="time" placeholder="Time" required />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Email" className="email_tag" required />
                                <input type="number" name="phoneNumber" placeholder="Phone Number" required />
                            </div>
                            <div>
                                <input type="text" name="ItemName" placeholder="Item Name" required />
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

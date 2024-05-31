import '../../Css/MakeReservation.modules.css'


function MakeReservation() {
    return (
        <>

         
            <section className="reservation" id="reservation">
                <div className="container">
                    <div className="banner">
                        <img className="Img-glass" src="/glass.png" alt="" width={'300px'} />

                    </div>
                    <div className="banner">
                        <div className="reservation_form_box">
                            <h1>MAKE A Order</h1>
                            <p> Big Order Please Call Me <b>(+91) 9175237382</b> </p>

                            <form>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        required
                                    // value={firstName}
                                    // onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        required
                                    // value={lastName}
                                    // onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="date"
                                        placeholder="Date"
                                    // value={date}
                                    // onChange={(e) => setDate(e.target.value)}
                                    />
                                    <input
                                        type="time"
                                        placeholder="Time"

                                    // value={time}
                                    // onChange={(e) => setTime(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="email_tag"
                                        required
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}/
                                    />
                                    <input
                                        type="number"
                                        placeholder="Phone"
                                        required
                                    // value={phone}
                                    // onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <input
                                        type="Text"
                                        placeholder="Item Name"
                                        required
                                    // value={phone}
                                    // onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <button type="submit">
                                    RESERVE NOW{" "}
                                    <span>
                                        {/* <HiOutlineArrowNarrowRight /> */}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default MakeReservation
import React from "react";


const Reservation = () => {


  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          {/* <img src="/reservation.png" alt="res" /> */}
      <img className="Img-glass" src="/glass.png" alt="" width={'300px'} />

        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A ORDER</h1>
            <p> Helpline Number <b>(+91) 9175237382</b> </p>  
           
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="54c177b4-4973-4bc6-9ddf-81c2533d6a7d"/>
              <div>
                <input
                  type="text"
                  placeholder="First_Name"
                  required
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                /> 
                <input
                  type="text"
                  placeholder="Last_Name"
                  required

                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  required

                  // value={date}
                  // onChange={(e) => setDate(e.target.value)}
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
  );
};

export default Reservation;

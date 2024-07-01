import React, { useEffect, useState } from 'react'

import "../Css/menus.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/Raza/Juices')
      .then((res) => {
        setData(res.data)
        // console.log(res.data)
      }).catch(() => {
        console.log('err on Getting juice data')
      })
  }, [])

  return (
    <>


      <div className="container">

        <center><h2 className="heading">POPULAR JUICES</h2></center>
        <p>You can order all types of dry fruits, juices, Mastani Laasi etc. from us. If you always want to contact us, please fill out our form below. Thank you for visiting our website.</p>

        <div className="dishes_container">

          {data.map(element => (
            <div className=" Main-Menuback" key={element.id}>
              <Link to={'/MakeReservation'}>      <img src={element.Image} alt={element.title} className='imgsize' /></Link>
              <center>  <h3>{element.JuiceName}</h3></center>
              <center>  <p> Juice Rate {element.Price} ₹</p></center>
              {/* <center>  <p>( {element.Quantity} )</p></center> */}

            </div>
          ))


          }


        </div>
      </div>


    </>
  )
}

export default Menu

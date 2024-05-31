import React, { useEffect, useState } from 'react'

import "../Css/menus.css"
import axios from 'axios'

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
      <div>
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            <center><h1 className="heading">POPULAR JUICES</h1></center>
            <p>You can order all types of dry fruits, juices, Mastani Laasi etc. from us. If you always want to contact us, please fill out our form below. Thank you for visiting our website.</p>
          </div>
          <div className="dishes_container">



            {data.map(element => (
              <div className=" Main-Menuback" key={element.id}>
                <img src={element.Image} alt={element.title} className='imgsize'  />
                <center>  <h3>{element.JuiceName}</h3></center>
                <center>  <p> {element.Price} ₹</p></center>
                {/* <center>  <p>( {element.Quantity} )</p></center> */}

              </div>
            ))


            }


          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Menu

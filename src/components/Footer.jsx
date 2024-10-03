import React from "react";
import "../Css/footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">Raza Juice Center  <p style={{fontSize:'small'}}> TQ. Naigaon Dist Nanded - 431709</p> </div>
          <div className="right">
            <p>Vahab_Kandhari</p>
            <p>Open: 10:00 Am - 11:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Wahab_Dev</p>
           <div> Search On Map <a href="">Click Here ---</a>  </div>
          </div>
          <div className="right">
            <p>All Rights Reserved By ﷽.</p> <br />
            <p>Contact Us :- 9975054098</p>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </footer>
  );
};



export default Footer;
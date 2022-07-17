import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SHAKTI BATTERY</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy;shaktiBattery</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/Shakti_battery">Instagram</a>
        <a href="https://www.youtube.com/channel/UC8eem6JFsOKdOgH0kkGpwgA/featured">Youtube</a>
        <a href="http://facebook.com/Shakti_battery">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;

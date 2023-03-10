import React from "react";
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            A recognized online store of original products, which has been
            operating on the territory of Kazakhstan for more than 4 years. We
            focus on European standards for eco-friendly products. Taking care
            of you and the benefits of our products is our priority
          </span>
        </div>
        <div className="item">
          <h1>Contacts</h1>
          <span>
            Tersen Store - ONLINE SNEAKER STORE WITH CARE AND LOVE FOR EVERYONE!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
            <span className="logo">Tersen Store</span>
            <span className="copyright">Online Store ©2023 Created by Tersen</span>
        </div>
        <div className="right">
            <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

function Footer() {
  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA]">
        <h3 class="text-[#252B42] text-2xl mb-10 font-extrabold">
          DressForDay
        </h3>
        <div className="text-blue">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
      <ul>
        <li>
          <h3>Company Info</h3>
          <a>About Us</a>
          <a>Carrier</a>
          <a>We are hiring</a>
          <a>Blog</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Legal</h3>
          <a>About Us</a>
          <a>Carrier</a>
          <a>We are hiring</a>
          <a>Blog</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Features</h3>
          <a>Business Marketing</a>
          <a>User Analytic</a>
          <a>Live Chat</a>
          <a>Unlimited Support</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Resources</h3>
          <a>IOS & Android</a>
          <a>Watch a Demo</a>
          <a>Customers</a>
          <a>API</a>
        </li>
      </ul>

      <h3>Get In Touch</h3>
      <input type="text" placeholder="Your Email"></input>
      <button>Subscribe</button>

      <div className="bg-[#FAFAFA]">
        Made With Love By Finland All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;

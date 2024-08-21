
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="company-name">My Company</div>
        <input type="text" className="search-bar" placeholder="Search..." />
        <ul className="nav-links">
          <li><a href="#home">Account<img src="https://img.icons8.com/?size=16&id=51716&format=png"style={{height:'20px'}}/></a></li>
          <li><a href="#about">My Cart<img src="https://img.icons8.com/?size=50&id=23175&format=png" style={{height:'20px'}}/></a></li>
     
        </ul>
      </nav>
      <div style={{backgroundColor:'red'}}>
      <nav className="navbar-2"style={{marginLeft:'30px',marginRight:'30px',borderRadius:'10px'}}>
        <ul className="nav-links-2">
          <li><a href="#blog">Blog</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#careers" style={{marginLeft:'600px'}}>03345768367</a></li>
        
        </ul>
      </nav></div>
    </>
  );
};

export default Navbar;
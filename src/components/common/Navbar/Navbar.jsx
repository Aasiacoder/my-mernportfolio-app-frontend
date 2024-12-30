import React, { useState } from "react";
import "./Navbar.css";
import MyName from "../../../assets/myname.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from "../Sidebar/Sidebar"


const Navbar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    // Open the sidebar
    const handleOpen = () => {
        setToggleSidebar(true); 
    };

    // Close the sidebar
    const handleClose = () => {
        setToggleSidebar(false); 
    };
   
    return (
        <section id="navbar">
            <nav className="nav-container">
                <a href="/" className="navbar-logo">
                    <img src={MyName} alt="logo" />
                    <span className="nav-name">Aasia</span>
                </a>
                <ul className="navbar-links">
                    <li><a href="#home" className="navbar-items">Home</a></li>
                    <li><a href="#about" className="navbar-items">About</a></li>
                    <li><a href="#project" className="navbar-items">Project</a></li>
                    <li><a href="#contact" className="navbar-items">Contact</a></li>
                </ul>
                <FontAwesomeIcon icon={faBars} onClick={handleOpen} className="menu-icon" />
                
                {/*Pass props to Sidebar*/}
                {toggleSidebar && (
                        <Sidebar onClose={handleClose} />
                     )}
            </nav>
        </section>
    )
}

export default Navbar
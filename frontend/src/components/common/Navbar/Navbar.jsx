import React from "react";
//import { Link } from "react-router-dom";
import "./Navbar.css";
import MyName from "../../../assets/myname.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
// import Sidebar from "../Sidebar/Sidebar"
import useSidebar from "../Sidebar/SidebarContext";
// import { SidebarProvider } from "../Sidebar/SidebarContext";
// import { useSidebar } from "../Sidebar/SidebarContext";

function Navbar() {
    const { toggleSidebar } = useSidebar();
    console.log(toggleSidebar)
    
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
                <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} className="menu-icon" />
                {/* <Sidebar toggleSidebar={toggleSidebar} /> */}
            </nav>
        </section>
    )
}

export default Navbar
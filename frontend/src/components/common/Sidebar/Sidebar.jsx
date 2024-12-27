import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import useSidebar from './SidebarContext';
import './Sidebar.css';
import { useState } from 'react';

const Sidebar = ({ onClose }) => {
    const { isSidebarOpen } = useState();
    
    return (
        <section id="sidebar">
            <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}> 
                <FontAwesomeIcon icon={faTimes} className="close-icon" id='side-close__icon' onClick={onClose} />
                <ul className="sidebar-list">
                    <li><a href="#home" className='sidebar-items'>Home</a></li>
                    <li><a href="#about" className='sidebar-items'>About</a></li>
                    <li><a href="#project" className='sidebar-items'>Project</a></li>
                    <li><a href="#contact" className='sidebar-items'>Contact</a></li>
                </ul>
            </div>
        </section>
    );
};

export default Sidebar
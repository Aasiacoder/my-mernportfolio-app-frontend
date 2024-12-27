import React from "react";
import { useState } from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [hireMe, setHireMe] = useState(false);
    console.log(hireMe);
    
    const navigate = useNavigate();

    function handleHireMe() {
        setHireMe(!hireMe)
        navigate("/hireme", { state: { email: "aasia3017@gmail.com" } });
    }

    return (
        <section id="home">
            <div className="home-container">
                <h2 className="home-myname">Hi, I'm Aasia</h2>
                <h3 className="home-profile">MERN Stack Developer | Web Developer | Passionate Coder</h3>
                <button onClick={handleHireMe} className="hire-me-button">Hire Me</button>
            </div>
        </section>
    )
}

export default Home
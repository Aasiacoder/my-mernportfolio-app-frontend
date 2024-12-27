import MongoDB from '../../assets/mongodb.png';
import ExpressJS from '../../assets/expressjs.png';
import ReactJS from '../../assets/reactjs.png';
import NodeJS from '../../assets/nodejs.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import JS from '../../assets/js.png';
import TailwindCss from '../../assets/tailwind.png';
import Firebase from '../../assets/firebase.png';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <h2 className="about-head">Who I Am?</h2>
                <p className="about-para">A motivated MERN stack web developer skilled in MongoDB, Express.js, React, Node.js, Firebase, HTML, CSS, JavaScript, and Tailwind CSS. I focus on building robust, high-performance applications that deliver smooth, engaging user experiences. Driven by curiosity and creativity, I continuously seek to improve my skills and create impactful web solutions that solve real-world challenges.</p>
            </div>
            <div className='about-images'>
                <img className='image' src={Html} alt="htmlLogo" />
                <img className='image' src={Css} alt="cssLogo" />
                <img className='image' src={JS} alt="jsLogo" />
                <img className='image' src={TailwindCss} alt="tailwindcssLogo" />
                <img className='image' src={MongoDB} alt="mongodbLogo" />
                <img className='image' src={ExpressJS} alt="expressLogo" />
                <img className='image' src={ReactJS} alt="reactLogo" />
                <img className='image' src={NodeJS} alt="nodejsLogo" />
                <img className='image' src={Firebase} alt="firebaseLogo" />
            </div>
        </section>
    )
}

export default About
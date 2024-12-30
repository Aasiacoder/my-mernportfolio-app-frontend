import './Contact.css';
import React, { useState } from 'react';
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://my-mernportfolio-renderbackend.onrender.com/api/contact', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Clear form
              } else {
                alert("Failed to send message. Please try again.");
              }
            } catch (error) {
              console.error("Error submitting contact form:", error);
              alert("Something went wrong.");
        }
    };

    return (
        <section id="contact">
            <h2 className="contact-header">Contact Me</h2>
            <div className='contact-container'>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label className="contact-label" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label className="contact-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label className="contact-label" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="h-40"
                        required
                    ></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    )
}

export default Contact
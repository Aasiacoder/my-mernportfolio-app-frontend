import './Contact.css';

function Contact() {

    return (
        <section id="contact">
            <h2 className="contact-header">Contact Me</h2>
            <div className='contact-container'>
                <form className="contact-form">
                    <label className="contact-label" for="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <label className="contact-label" for="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label className="contact-label" for="message">Message</label>
                    <input type="text" id="message" className="h-32" />
                    <input type="submit" value="Submit" name="message" />
                </form>
            </div>
        </section>
    )
}

export default Contact
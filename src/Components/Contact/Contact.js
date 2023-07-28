import './Contact.css';
import emailjs from 'emailjs-com';
import { useRef, useEffect, useState } from 'react';


export default function Contact() {

    async function onSubmitForm(e) {
        e.preventDefault();
        await emailjs.sendForm(
            'service_zp2asnk',
            'template_a9r4f6j',
            e.target,
            'PA-r43VutO266dtbS'
        )
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
        console.log("form submitted");
    }
    const [contactVisible, setContactVisible] = useState();
    const contactRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setContactVisible(entry.isIntersecting);
        })
        observer.observe(contactRef.current);
    })
    return (
        <div ref={contactRef} className="contact" id="contact">
            <div className={`heading reveal-bottom ${contactVisible ? "animate" : ""}`}>
                CONTACT <span>ME</span>
            </div>
            <div className={`contact-box reveal-bottom ${contactVisible ? "animate" : ""}`}>
                <form action="" onSubmit={onSubmitForm} className='contact-form'>
                    <div>
                        <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                        <label htmlFor="name">Name :</label>
                    </div>
                    <div>
                        <input type="email" name='email' id='email' placeholder='Enter Your E-mail' />
                        <label htmlFor="email">Email :</label>
                    </div>
                    <div>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
                        <label htmlFor="message">Message :</label>
                    </div>
                    <button type="submit" className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>


    );
}
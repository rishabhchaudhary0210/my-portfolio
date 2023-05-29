import './Contact.css';
import emailjs from 'emailjs-com';

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

    return (
        <div className="contact" id="contact">
            <div className="heading">
                CONTACT <span>ME</span>
            </div>
            <div className="contact-box">
                <form action="" onSubmit={onSubmitForm} className='contact-form'>
                    <label htmlFor="name">Name :</label>
                    <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                    <label htmlFor="email">Email :</label>
                    <input type="email" name='email' id='email' placeholder='Enter Your E-mail' />
                    <label htmlFor="message">Message :</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
                    <button type="submit" className='submit-btn'>Submit</button>
                </form>
            </div>
            <div className="social-links">
                <a href="https://github.com/rishabhchaudhary0210" target='_blank' rel="noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='Github' />
                </a>
                <a href="https://www.linkedin.com/in/rishabh-chaudhary-108564154" target='_blank' rel="noreferrer" >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt='Linkedin'/>
                </a>
            </div>
        </div>
    );
}
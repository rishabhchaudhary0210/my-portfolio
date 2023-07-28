import './Social.css';
import { useState } from 'react';

export default function Social() {

    const [socialActive, setSocialActive] = useState(false);

    return (
        <div className='social'>
            <div className="socialButton iconLinks" onClick={() => { setSocialActive(!socialActive) }}>
                {!socialActive && <i class="fa-solid fa-user"></i>}
                {socialActive && <i class="fa-solid fa-x"></i>}
            </div>
            { socialActive && 
                <div className="icons-box">
                <a href="chaudharyrishabh0210@gmail.com" className={`iconLinks envelope`} target="_blank" >
                    <i class="fa-solid fa-envelope"></i>
                </a>
                <a href="https://github.com/rishabhchaudhary0210" className={`iconLinks github`} target="_blank" rel="noreferrer" >
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/rishabh-chaudhary-108564154" className={`iconLinks linkedin`} target="_blank" rel="noreferrer" >
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                {/* <a href="https://instagram.com/_.rishabh.chaudhary._?igshid=MzNlNGNkZWQ4Mg==" className="icon-links" target="_blank" rel="noreferrer"  >
                 <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com/ItsRishabh02?t=C_PAIivEq-r3hcAxAEURpg&s=08" className="icon-links" target="_blank" rel="noreferrer" >
                 <i class="fa-brands fa-twitter"></i>
                </a> */}
            </div>}
        </div>
    );

}
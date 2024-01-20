import './Social.css';
import { useState, useRef, useEffect} from 'react';

export default function Social() {

    const [socialActive, setSocialActive] = useState(false);
    const socialRef = useRef(null);

    useEffect(()=>{
        const HandleClickOutside = (e)=>{
            if(socialRef.current && !socialRef.current.contains(e.target)){
                setSocialActive(false);
            }
        }
        document.addEventListener('mousedown', HandleClickOutside);
        return () => { document.removeEventListener('mousedown', HandleClickOutside); };
    },[]);

    return (
        <div className='social' ref={socialRef}>
            <div className="socialButton iconLinks" onClick={() => { setSocialActive(!socialActive) }}>
                {!socialActive && <i class="fa-solid fa-user"></i>}
                {socialActive && <i class="fa-solid fa-x"></i>}
            </div>
            <div className="icons-box">
                {/* <a href="chaudharyrishabh0210@gmail.com" className={`iconLinks ${socialActive ? "envelope" : ""}`} target="_blank" >
                </a> */}

                <a href="https://twitter.com/ItsRishabh02" className={`iconLinks ${socialActive ? "twitter" : ""}`} target="_blank" rel="noreferrer" >
                 <i class="fa-brands fa-twitter"></i>
                </a> 
                <a href="https://github.com/rishabhchaudhary0210" className={`iconLinks ${socialActive ? "github" : ""}`} target="_blank" rel="noreferrer" >
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/rishabh-chaudhary-108564154" className={`iconLinks ${socialActive ? "linkedin" : ""}`} target="_blank" rel="noreferrer" >
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                {/* <a href="https://instagram.com/_.rishabh.chaudhary._" className="icon-links" target="_blank" rel="noreferrer"  >
                 <i class="fa-brands fa-instagram"></i>
    </a>*/}
            </div>
        </div>
    );

}
import './Navbar.css';
import {useState} from 'react';
import logo from '../../Assets/R-logo-bg.png';
export default function Navbar() {
    const [active, setActive] = useState(false);
    function toggleActive(){
        setActive(!active);
    }
    return (
        <div className={active ? "navbar active" : "navbar" }>
            <span>
                <a href="#home" class="logo">
                {/* <img src={logo} alt="Icon" /> */}
                    RISHABH
                </a>
            </span>    
            <ul className={active ? "navList active" : "navList"}>
                <a href="#home" className='navLinks' onClick={toggleActive}>
                    <li className="navItems">HOME</li>
                </a>
                <a href="#about" className='navLinks' onClick={toggleActive}>
                    <li className="navItems">ABOUT</li>
                </a>
                {/* <a href="#skill" className='navLinks' onClick={toggleActive}>
                    <li className="navItems">SKILLS</li>
                </a> */}
                <a href="#projects" className='navLinks' onClick={toggleActive}>
                    <li className="navItems">PROJECTS</li>
                </a>
                <a href="#contact" className='navLinks' onClick={toggleActive}>
                    <li className="navItems">CONTACT</li>
                </a>
            </ul>
            <div className={active ? "hamburger active":"hamburger"} onClick={toggleActive}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

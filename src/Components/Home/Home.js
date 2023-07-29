import './Home.css';
import { useEffect, useRef , useState} from 'react';

export default function Home() {
    const [homeVisible, setHomeVisible] = useState();
    const homeRef = useRef();
    const btnRef = useRef();
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setHomeVisible(entry.isIntersecting);
        })
        observer.observe(homeRef.current);
    })
    const handleMouseMove = (e)=>{
        let x = e.offsetX;
        let y = e.offsetY;
        let btnHeight = btnRef.current.clientHeight;
        let btnWidth = btnRef.current.clientWidth;

        let moveX = x - btnWidth/2;
        let moveY = y - btnHeight/2;

        
        
        btnRef.current.style.transform = `translateX(${moveX}) translateY(${moveY})`;
        
    }
    const handleMouseOut = ()=>{
        btnRef.current.style.transform = `translateX(0) translateY(0)`;
    }

    return (
        <div ref={homeRef} className="home" id='home'>
            <div className="bg-cont">
                <div className="blob-wrapper">
                    <div className="blob-1"></div>
                    <div className="blob-2"></div>
                    <div className="bg-overlap"></div>
                </div>
            </div>
            <div className="sub-home">
                <div className={`name-box box reveal-left ${homeVisible ? "animate" : ""}`}>
                    <span className='hello'>👋</span>
                    <div>
                        <span className="name">
                            Hi, I'm
                        </span>
                        <h1>
                            Rishabh Chaudhary
                        </h1>
                    </div>
                </div>
                <div className={`title-box box reveal-right ${homeVisible ? "animate" : ""}`}>
                    <h3>
                        Web Developer
                    </h3>
                    <h3>
                        Exploring Open Source
                    </h3>
                    <h3>
                        Upcoming Engineer
                    </h3>
                </div>
                <div className={`info-box box reveal-bottom ${homeVisible ? "animate" : ""}`}>
                    I'm currently pursuing my B.Tech. in Computer Science Engineering where I have gained extensive knowledge about computers and programming. I am a hardworking and dedicated individual with a passion for technology. With a fairly strong hold of logical and problem solving skills I push harder to get better every day.
                </div>
                <a ref={btnRef} href="https://docs.google.com/document/d/1IaqRnOg3AUf7tqyN8_rJcWy8euhPl4a8dLoAXt6uX_w/edit?usp=sharing" target='_blank' rel="noreferrer" download className={`download reveal-bottom ${homeVisible ? "animate" : ""}`} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
                    <span class="material-symbols-outlined">download</span>
                    Download Resume
                </a>
            </div>
        </div>
    );
}
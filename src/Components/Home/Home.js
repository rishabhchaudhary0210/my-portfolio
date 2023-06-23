import './Home.css';
import {useEffect} from 'react';

export default function Home() {
    
    // useEffect(()=>{
        //     subhome.classList.add('animate');
        // },[]);
        return (
            <div className="home" id='home'>
            <div className="sub-home animate">
                <div className="name-box box">
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
                <div className="title-box box">
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
                <div className="info-box box">
                    I'm currently pursuing my B.Tech. in Computer Science Engineering where I have gained extensive knowledge about computers and programming. I am a hardworking and dedicated individual with a passion for technology. With a fairly strong hold of logical and problem solving skills I push harder to get better every day.
                </div>
                <a href="https://drive.google.com/file/d/1lEvZ0-izYGpnH4V51XmhLNzMDbVTF2a2/view?usp=drivesdk"  target='_blank' rel="noreferrer" download className="download">
                    <span class="material-symbols-outlined">download</span> 
                    Download Resume
                </a>
            </div>
        </div>
    );
}
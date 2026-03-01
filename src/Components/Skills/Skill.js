import './Skill.css';
import { useRef, useEffect, useState } from 'react';
import softProg from "./../../Assets/soft-programmer.png";
import frontDev from "./../../Assets/frontend-dev.png";
import backDev from "./../../Assets/backend-dev.png";

export default function Skill() {
    const skillRef = useRef();
    const [skillVisible, setSkillVisible] = useState();

    useEffect(() => {
        const currentRef = skillRef.current;
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting === true) {
                setSkillVisible(true);
            }
        });
        observer.observe(currentRef);
        return () => observer.unobserve(currentRef);
    }, []);

    return (
        <div ref={skillRef} id="about" className="skill" >
            <h1 className={`heading reveal-bottom ${skillVisible ? "animate" : ""}`}>
                Explore my <span>technological toolbox</span> below.
            </h1>
            <div className="head-cont">
                <div className={`sub-cont reveal-bottom ${skillVisible ? "animate" : ""}`} style={{ transitionDelay: '0.1s' }}>
                    <img src={softProg} alt="Software Development Engineer" />
                    <h2>Software Development Engineer</h2>
                    <p>Building scalable production-grade systems and complex logic with a focus on data structures, performance, and maintainability.</p>
                </div>
                <div className={`sub-cont reveal-bottom ${skillVisible ? "animate" : ""}`} style={{ transitionDelay: '0.3s' }}>
                    <img src={frontDev} alt="Frontend Developer" />
                    <h2>Frontend Developer</h2>
                    <p>Crafting high-performance, modular web applications using modern frameworks like React and Next.js with a focus on premium UX.</p>
                </div>
                <div className={`sub-cont reveal-bottom ${skillVisible ? "animate" : ""}`} style={{ transitionDelay: '0.5s' }}>
                    <img src={backDev} alt="Backend Developer" />
                    <h2>Backend Developer</h2>
                    <p>Developing robust backend services and managing cloud infrastructure, focusing on scalable APIs and efficient data processing.</p>
                </div>
            </div>
            <div className={`skill-cont-box reveal-left ${skillVisible ? "animate" : ""}`}>
                <div className="skill-head">
                    <h1 className={`reveal-bottom ${skillVisible ? "animate" : ""}`}>
                        Here's a comprehensive list of the <span>technology stack</span> in which I have gained valuable experience.
                    </h1>
                </div>
                <div className="skill-cont">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt='C' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt='C++' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt='Python' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='JavaScript' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt='TypeScript' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='HTML5' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS3' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='React' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt='Next.js' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt='Redux' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt='Tailwind' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" alt='Material UI' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='Node.js' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='Express' style={{ filter: 'invert(100%)' }} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" alt='NestJS' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt='PostgreSQL' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='MySQL' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt='MongoDB' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt='Redis' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" alt='DynamoDB' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/influxdb/influxdb-original.svg" alt='InfluxDB' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt='AWS' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt='Docker' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" alt='Kubernetes' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" alt='Jenkins' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" alt='Prometheus' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" alt='Grafana' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt='Linux' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt='Jest' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg" alt='Vitest' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='Git' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='GitHub' style={{ filter: 'invert(100%)' }} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt='Postman' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt='Firebase' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt='Supabase' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt='Jira' />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg" alt='Sentry' style={{ filter: 'invert(100%)' }} />
                </div>
            </div>
        </div>
    );
}
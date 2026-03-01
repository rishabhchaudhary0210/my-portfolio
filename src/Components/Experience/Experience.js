import './Experience.css';
import { useRef, useEffect, useState } from 'react';

const experienceData = [
    {
        role: "Software Developer",
        type: "Full-time",
        company: "Real Time Data Services",
        product: "AceCloud",
        duration: "Jul 2025 – Present",
        location: "Gurugram, Haryana · On-site",
        points: [
            "Working on AceCloud, a public cloud platform, contributing to the development of core cloud services used by production customers.",
            "Contributed to the Container-as-a-Service (CaaS) offering, enabling users to deploy and manage containerized workloads on the platform.",
            "Developed Scheduler-as-a-Service, allowing users to automate tasks and orchestrate workflows across cloud resources.",
            "Collaborated on multiple platform features including object storage, automated backup systems with retention policies, and customer onboarding/offboarding journeys."
        ]
    },
    {
        role: "Software Development Intern",
        type: "Internship",
        company: "Real Time Data Services",
        product: "AceCloud",
        duration: "Jan 2025 – Jul 2025",
        location: "Gurugram, Haryana · On-site",
        points: [
            "Resolved critical production bugs affecting live customer workloads, improving platform stability and reliability.",
            "Migrated the public cloud platform UI from legacy codebases to a modern, modular architecture applying SOLID principles.",
            "Integrated Mixpanel analytics to track user behavior, enabling teams to analyze user flows and identify retention drop-offs.",
            "Gained hands-on exposure to cloud technologies while collaborating across multiple engineering teams."
        ]
    },
    {
        role: "Full Stack Developer - Intern",
        type: "Internship",
        company: "Geometry Systems",
        product: "PRISM AI",
        duration: "May 2024 – Dec 2024",
        location: "Noida, UP · Remote",
        points: [
            "Contributed to PRISM, a B2B procurement platform, developing frontend and backend features using React.js, Node.js, and TypeScript.",
            "Worked on critical business workflows including inventory management, order processing, and order fulfilment.",
            "Designed and implemented a multi-channel notification system (email, WhatsApp, in-app) for order and workflow updates.",
            "Independently developed a WhatsApp chatbot using WATI, enabling users to perform key procurement actions directly from WhatsApp."
        ]
    }
];

const achievements = [
    {
        icon: "🏆",
        title: "AceCloud Innovation Award",
        description: "Awarded for delivering innovative, high-impact cloud technical solutions."
    },
    {
        icon: "🥈",
        title: "AceAI Hackathon Runner-up",
        description: "Secured Runner-up position in the AceAI Hackathon."
    }
];

export default function Experience() {
    const expRef = useRef();
    const [expVisible, setExpVisible] = useState(false);

    useEffect(() => {
        const currentRef = expRef.current;
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setExpVisible(true);
            }
        }, { threshold: 0.05 });
        observer.observe(currentRef);
        return () => observer.unobserve(currentRef);
    }, []);

    return (
        <div ref={expRef} id="experience" className="experience">
            <h1 className={`heading reveal-bottom ${expVisible ? "animate" : ""}`}>
                Professional <span>Experience</span>
            </h1>

            <div className="timeline">
                {experienceData.map((exp, index) => (
                    <div
                        className={`timeline-item reveal-bottom ${expVisible ? "animate" : ""}`}
                        key={index}
                        style={{ transitionDelay: `${index * 0.2}s` }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="exp-header">
                                <div className="exp-header-left">
                                    <h2 className="exp-role">{exp.role}</h2>
                                    <h3 className="exp-company">
                                        {exp.company} <span className="exp-product">| {exp.product}</span>
                                    </h3>
                                </div>
                                <div className="exp-header-right">
                                    <span className="exp-type">{exp.type}</span>
                                    <span className="exp-duration">{exp.duration}</span>
                                    <span className="exp-location">{exp.location}</span>
                                </div>
                            </div>
                            <ul className="exp-points">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`achievements-section reveal-left ${expVisible ? "animate" : ""}`}
                style={{ transitionDelay: '0.6s' }}
            >
                <h2 className="achievements-heading">
                    <span>Achievements</span>
                </h2>
                <div className="achievements-grid">
                    {achievements.map((ach, index) => (
                        <div
                            className={`achievement-card reveal-right ${expVisible ? "animate" : ""}`}
                            key={index}
                            style={{ transitionDelay: `${0.8 + index * 0.15}s` }}
                        >
                            <span className="achievement-icon">{ach.icon}</span>
                            <div className="achievement-info">
                                <h3>{ach.title}</h3>
                                <p>{ach.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

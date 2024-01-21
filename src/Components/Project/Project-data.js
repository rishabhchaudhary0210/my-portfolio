// import adminDash from './../../Assets/Project-photos/admin-dashboard.jpg';
// import dailyJournal from './../../Assets/Project-photos/daily-journal.jpg';
// import diceGame from './../../Assets/Project-photos/dice-game.jpg';
// import drumKit from './../../Assets/Project-photos/drum-kit.jpg';
// import foodSite from './../../Assets/Project-photos/food-site.jpg';
// import groco from './../../Assets/Project-photos/groco.jpg';
// import marvelPedia from './../../Assets/Project-photos/marvel-pedia.jpg';
// import simonGame from './../../Assets/Project-photos/simon-game.jpg';
// import talentConnect from './../../Assets/Project-photos/talent-connect.jpg';
// import ticTacToe from './../../Assets/Project-photos/tic-tac-toe.jpg';
// import toDoList from './../../Assets/Project-photos/to-do-list.jpg';

import {dailyJournal, groco, adminDash, talentConnect, toDoList} from "../../Assets/Project-photos/Photo";

const projectData = [
    {
        // image: "https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?w=740&t=st=1687537556~exp=1687538156~hmac=53ab2f572a80f79677c178dfe4b105a497364ff4350569ce0042d0c83d426ea2",
        image:dailyJournal,
        viewLink: "https://the-daily-journal-blog.vercel.app/",
        codeLink: "https://github.com/rishabhchaudhary0210/The-Daily-Journal",
        head: "The Daily Journal",
        text: "A fullstack blogging App to journal your experiences and life stories and help you share your ideas.",
        skills: ["HTML", "CSS", "JavaScript", "NodeJs", "ExpressJs", "MongoDB"]
    },

    {
        // image: "https://img.freepik.com/free-vector/supermarket-food-shelves-eggplant-cabbage-carrot-peppers-onions-corn-bread-potatoes-shopping-fresh-vector-illustration_1284-46271.jpg?w=740&t=st=1687610989~exp=1687611589~hmac=04fc53c8e57b3eaf22ac68bf2f93c622bc257c2ec3c549c95faa63520dfa755c",
        image:groco,
        viewLink: "https://rishabhchaudhary0210.github.io/Grocery-Website/",
        codeLink: "https://github.com/rishabhchaudhary0210/Grocery-Website",
        head: "GROCO-Grocery Store",
        text: "A website to fulfill your daily grocery needs. A static fronted designed to practice my skills and try out the Swiper.",
        skills: ["HTML", "CSS", "JavaScript", "SwiperJs"]
    },

    {
        // image: "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=740&t=st=1687604447~exp=1687605047~hmac=5024c2419663ca5df620320ffaa2c732fa678a4c3d78dda0f4bf11074860555d",
        image:adminDash,
        viewLink: "https://rishabhchaudhary0210.github.io/Admin-Dashboard/",
        codeLink: "https://github.com/rishabhchaudhary0210/Admin-Dashboard",
        head: "Admin DashBoard",
        text: "A fully responsive and modern dashboard design to help businesses keep complete track of their day to day analytics.",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    
    {
        // image:"https://img.freepik.com/premium-vector/employment-agency-recruitment-placement-job-service-illustration_2175-5089.jpg?w=740",
        image:talentConnect,
        viewLink:"https://talent-connect-omega.vercel.app/",
        codeLink:"https://github.com/rishabhchaudhary0210/Talent-connect",
        head:"Talent Connect",
        text:"The FrontEnd design for an online recruitment solution. The webpage is designed to provide users a complete insight to using their services.",
        skills:["HTML", "CSS", "JavaScript"],
    },
    {
        // image: "https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=740&t=st=1687606077~exp=1687606677~hmac=f5a51e52bf6d13c57420ab49775b4d8d89c6f6b38d682c6f8c6f5b90405c1b54",
        image:toDoList,
        viewLink: "https://github.com/rishabhchaudhary0210/to-do-list",
        codeLink: "https://github.com/rishabhchaudhary0210/to-do-list",
        head: "To-Do-List",
        text: "A basic to-do-list webApp with database connectivity to help you track your daily tasks.",
        skills: ["HTML", "CSS", "JavaScript", "NodeJs", "ExpressJs", "MongoDB"]
    }
    ,

    {
        image: "https://img.freepik.com/free-vector/yellow-lined-notepaper-journal-sticker-vector_53876-168271.jpg?w=740&t=st=1687606313~exp=1687606913~hmac=e4b12528dcf51c91f11d49a410919b2729786af31c669d20d075aed1323ea91e",
        viewLink: "https://note-keeper-mu.vercel.app/",
        codeLink: "https://github.com/rishabhchaudhary0210https://github.com/rishabhchaudhary0210/NoteKeeper",
        head: "NoteKeeper",
        text: "A react based note making app so that you don't have to be scared of forgetting your imprompt ideas.",
        skills: ["ReactJS", "HTML", "CSS", "JavaScript"]
    },

    // {
    //     image:"",
    //     viewLink:"",
    //     codeLink:"",
    //     head:"",
    //     text:"",
    //     skills:[],
    // }
];

export default projectData;

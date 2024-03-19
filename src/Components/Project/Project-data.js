import { dailyJournal, groco, adminDash, talentConnect, toDoList, travelPartner, marvelPedia, foodSite, drumKit, simonGame, ticTacToe, discordClone, imageLibrary, weatherApp } from "../../Assets/Project-photos/Photo";

const projectData = [
    {
        image: travelPartner,
        viewLink: "https://travelpartner.vercel.app/",
        codeLink: "https://github.com/rishabhchaudhary0210/CodSoft/tree/main/travel-partner",
        head: "Travel Partner",
        text: " The Travel Partner Project is a sophisticated MERN stack web app integrated with the Amadeus API. Offering real-time flight search, user authentication, and authorization, it facilitates convenient travel planning. ",
        // The project also includes a unique "cheapest day" search feature, enhancing the overall user experience.,
        skills: ["ReactJs", "JavaScript", "NodeJs", "Amadeus API", "ExpressJS", "MongoDB", "JWT"]
    },
    {
        image: discordClone,
        viewLink: "https://discord-clone-i6xx.onrender.com/",
        codeLink: "https://github.com/rishabhchaudhary0210/discord-clone",
        head: "Discord Clone",
        text: "Created a Discord clone using Next.js, TypeScript, Clerk Auth, Socket.io, LiveKit, Tanstack Query and other technologies, offering a fully functional chat application. Implemented features like real-time messaging, user authentication, and chat rooms, providing a seamless communication platform.",
        skills: ["NextJs", "TypeScript", "ClerkAuth", "SocketIO", "LiveKit", "Prisma", "Supabase", "Tanstack Query", "Zustand"]
    },
    {
        // image: "https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?w=740&t=st=1687537556~exp=1687538156~hmac=53ab2f572a80f79677c178dfe4b105a497364ff4350569ce0042d0c83d426ea2",
        image: dailyJournal,
        viewLink: "https://the-daily-journal-blog.vercel.app/",
        codeLink: "https://github.com/rishabhchaudhary0210/The-Daily-Journal",
        head: "The Daily Journal",
        // text: "A fullstack blogging App to journal your experiences and life stories and help you share your ideas.",
        text: "The Daily Journal is a dynamic, full-stack personal blog website. Developed using HTML, CSS, JavaScript, NodeJS, and MongoDB, it empowers users to create, share, and engage with blog content. The platform offers a seamless and interactive experience for both bloggers and readers.",
        skills: ["HTML", "CSS", "JavaScript", "EJS", "NodeJs", "ExpressJs", "MongoDB"]
    },
    {
        image: imageLibrary,
        viewLink: "https://image-library-tan.vercel.app/",
        codeLink: "https://github.com/rishabhchaudhary0210/rishabh-dobby",
        head: "The Image Library",
        text: "Developed a full-stack web application using React.js and Node.js, enabling users to upload, store, and search images along with authentication and authorization for secured access. Integrated Cloudinary for image storage and MongoDB for user data, enhancing user experience and accessibility.",
        skills: ["ReactJS", "JavaScript", "TailWind", "Cloudinary", "NodeJS", "ExpressJS", "Multer", "MongoDB", "JWT"],
    },

    {
        // image: "https://img.freepik.com/free-vector/supermarket-food-shelves-eggplant-cabbage-carrot-peppers-onions-corn-bread-potatoes-shopping-fresh-vector-illustration_1284-46271.jpg?w=740&t=st=1687610989~exp=1687611589~hmac=04fc53c8e57b3eaf22ac68bf2f93c622bc257c2ec3c549c95faa63520dfa755c",
        image: groco,
        viewLink: "https://rishabhchaudhary0210.github.io/Grocery-Website/",
        codeLink: "https://github.com/rishabhchaudhary0210/Grocery-Website",
        head: "GROCO-Grocery Store",
        // text: "A website to fulfill your daily grocery needs. A static fronted designed to practice my skills and try out the Swiper.",
        text: "Groco is a user-friendly e-commerce platform tailored for daily kitchen needs. Designed to simplify the grocery shopping experience, it offers a seamless interface for users to explore, select, and order their daily essentials conveniently online.",
        skills: ["HTML", "CSS", "JavaScript", "SwiperJs"]
    },

    {
        // image: "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=740&t=st=1687604447~exp=1687605047~hmac=5024c2419663ca5df620320ffaa2c732fa678a4c3d78dda0f4bf11074860555d",
        image: adminDash,
        viewLink: "https://rishabhchaudhary0210.github.io/Admin-Dashboard/",
        codeLink: "https://github.com/rishabhchaudhary0210/Admin-Dashboard",
        head: "Admin DashBoard",
        // text: "A fully responsive and modern dashboard design to help businesses keep complete track of their day to day analytics.",
        text: "The Admin Dashboard is a comprehensive tool designed for businesses to track and manage various aspects of their operations. It provides real-time insights into earnings, expenses, and order status, facilitating efficient decision-making and enhancing overall operational efficiency.",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        image: marvelPedia,
        viewLink: "https://the-marvel-pedia.vercel.app/",
        codeLink: "https://github.com/rishabhchaudhary0210/The-marvel-pedia",
        head: "Marvel-Pedia",
        text: "Marvel-pedia is a React-based web app utilizing the Marvel Developer API. It caters to fans' curiosity by providing comprehensive information about superheroes, comics, and series, allowing users to explore the vast Marvel universe.",
        skills: ["ReactJs", "JavaScript", "Tailwind", "MarvelDev-API"],
    },
    {
        // image:"https://img.freepik.com/premium-vector/employment-agency-recruitment-placement-job-service-illustration_2175-5089.jpg?w=740",
        image: talentConnect,
        viewLink: "https://talent-connect-omega.vercel.app/",
        codeLink: "https://github.com/rishabhchaudhary0210/Talent-connect",
        head: "Talent Connect",
        // text:"The FrontEnd design for an online recruitment solution. The webpage is designed to provide users a complete insight to using their services.",
        text: "Talent Connect is a website designed for an HR agency. Focused on talent recruitment, the platform explores and identifies the best candidates for various roles, presenting a well-designed and content-rich interface for talent acquisition.",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        image: weatherApp,
        viewLink: "https://weatherist-lemon.vercel.app/",
        codeLink: "https://github.com/rishabhchaudhary0210/Weatherist",
        head: "Weatherist",
        text: "Designed and developed a weather application using React.js, providing users with real-time weather updates. Integrated with a weather API to fetch and display accurate weather information, enhancing user experience and convenience.",
        skills: ["ReactJS", "JavaScript", "WeatherAPI", "ChartJS"],
    },
    {
        // image: "https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=740&t=st=1687606077~exp=1687606677~hmac=f5a51e52bf6d13c57420ab49775b4d8d89c6f6b38d682c6f8c6f5b90405c1b54",
        image: toDoList,
        viewLink: "https://github.com/rishabhchaudhary0210/to-do-list",
        codeLink: "https://github.com/rishabhchaudhary0210/to-do-list",
        head: "To-Do-List",
        // text: "A basic to-do-list webApp with database connectivity to help you track your daily tasks.",
        text: "The To-Do-List WebApp is a task management solution with a robust Node backend and MongoDB database. This web application allows users to efficiently organize and track their tasks, ensuring a systematic approach to managing daily responsibilities.",
        skills: ["HTML", "CSS", "JavaScript", "NodeJs", "ExpressJs", "MongoDB"]
    }
    ,

    {
        image: "https://img.freepik.com/free-vector/yellow-lined-notepaper-journal-sticker-vector_53876-168271.jpg?w=740&t=st=1687606313~exp=1687606913~hmac=e4b12528dcf51c91f11d49a410919b2729786af31c669d20d075aed1323ea91e",
        viewLink: "https://note-keeper-mu.vercel.app/",
        codeLink: "https://github.com/rishabhchaudhary0210https://github.com/rishabhchaudhary0210/NoteKeeper",
        head: "NoteKeeper",
        // text: "A react based note making app so that you don't have to be scared of forgetting your imprompt ideas.",
        text: "NoteKeeper is a user-friendly note-making app created with ReactJS. It provides a clean and intuitive interface for users to jot down and organize their thoughts, ideas, and important notes effortlessly.",
        skills: ["ReactJS", "HTML", "CSS", "JavaScript"]
    },
    {
        image:foodSite,
        viewLink:"",
        codeLink:"",
        head:"Food-Site",
        text:"The Food Site is a landing page designed for a food delivery business. It provides users with online ordering and bulk ordering options, creating an engaging platform for customers to explore and avail of food delivery services.",
        skills:["HTML","CSS","JavaScript"],
    },
    {
        image:drumKit,
        viewLink:"",
        codeLink:"",
        head:"Drum Kit",
        text:"The Drum Kit website offers an interactive experience, allowing users to play different components of a band's drum using mouse and keyboard clicks. It serves as an engaging platform for music enthusiasts to experiment with drum sounds",
        skills:["HTML","CSS","JavaScript"],
    },
    {
        image:simonGame,
        viewLink:"",
        codeLink:"",
        head:"Simon Game",
        text:"The Simon Game is a memory game developed with JavaScript. Providing insights into JS functionality, the game challenges users to enhance their memory skills by replicating a sequence of colors and sounds.",
        skills:["HTML","CSS","JavaScript"],
    },
    {
        image:ticTacToe,
        viewLink:"",
        codeLink:"",
        head:"Tic-Tac-Toe",
        text:"Tic Tac Toe is a classic game implemented for users to enjoy a strategic and competitive gaming experience. The project involves creating an interactive and user-friendly platform for playing the timeless game.",
        skills:["HTML","CSS","JavaScript"],
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

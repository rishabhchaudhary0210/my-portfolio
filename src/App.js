import './App.css';
import { useEffect, useState } from 'react';

import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Social from './Components/Socials/Social';
// import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';


function App() {
  const [showComp, setShowComp] = useState(false);
  useEffect(()=>{
    window.scrollTo(0,0);
    const showCompTimeout = setTimeout(()=>{
      setShowComp(true);
    },2800);
  },[]);
  return (
    <div className="app">
      <Loader />
      <div className={`app-container ${showComp ? "active":""}`}>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
        <Social />
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;

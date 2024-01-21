import './App.css';
import { useEffect} from 'react';

import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
// import About from './Components/About/About';
import Skill from './Components/Skills/Skill';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Social from './Components/Socials/Social';
// import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';


function App() {
  useEffect(()=>{
    window.scrollTo(0,0);
    
  },[]);
  return (
    <div className="app">
      <Loader />
      <div className={`app-container`}>
        <Navbar />
        <Home />
        {/* <About /> */}
        <Skill />
        <Project />
        <Contact />
        <Social />
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;

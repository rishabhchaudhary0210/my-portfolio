import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';

// import {useEffect} from 'react';


function App() {
  
  // useEffect(()=>{
  //   window.onload = ()=>
  //   {
  //   let revealLeft = document.getElementsByClassName("reveal-left");
  //   let revealRight = document.getElementsByClassName("reveal-right");
  //   let revealBottom = document.getElementsByClassName("reveal-bottom");

  //   console.log('printing')
  //   console.dir(revealLeft[0])
  //    for(let i=0; i<2; i++){
  //     console.log("loop printing")
  //     if(revealLeft[i].classList.contains('animate')){
  //       revealLeft[i].classList.remove('animate');
  //       console.log('removed');
  //     }
  //   }
  //   console.dir(revealLeft);

  //   setTimeout(()=>{
  //     for(var i=0; i<2; i++){
  //       revealLeft[i].classList.add('animate');
  //     }
  //   },5000)
  // }
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;

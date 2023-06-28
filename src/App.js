import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import UpComingProjects from './components/UpComingProjects';
import Services from './components/Services';
import Projects from './components/Projects';
import Karmic from './components/Karmic';
import Values from './components/Values';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Hero/>
    <UpComingProjects/>
    <Services/>
    <Projects/>
    <Karmic/>
    <Values/>
    <Footer/>
    </>
  );
}

export default App;

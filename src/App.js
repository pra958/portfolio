import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import About from './components/About';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Education />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      {/* <Achievements /> */}
      <About />
      <Footer />
    </>
  );
};

export default App;

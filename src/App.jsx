import react from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LearningPath from './components/LearningPath';
import Main from './components/Main';

function App() {
 
  return (
    <>
      <Navbar />
      <Main />
      <Expertise />
      <LearningPath />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;

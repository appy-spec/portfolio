import react from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
 
  return (
    <>
      <Navbar />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;

import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Interests from './components/Interests';
import Resume from './components/Resume';
//import Contact from './components/Contact';
import PhotoGallery from './pages/PhotoGallery';
import ContactForm from './components/ContactForm';

const App: React.FC = () => (
    <>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Interests />
            <Resume />
            <ContactForm />
            <PhotoGallery/>
    </>
);

export default App;
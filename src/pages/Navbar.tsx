import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => (
    <nav>
        <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="interests" smooth={true} duration={500}>Interests</Link></li>
            <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            <li><Link to="gallery" smooth={true} duration={500}>Photo Gallery </Link></li>
        </ul>
    </nav>
);

export default Navbar;

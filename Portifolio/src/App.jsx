import React, {useState} from 'react';
import './App.css';

import SkillSection from './Components/SkillSection';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import ContactSection from './Components/ContactSection';

import pic from './picpic.png';

function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Portfolio</h1>
        </header>
  
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <div className="menu">
          <a href="#about" id='about-link' onClick={toggleMenu}>About Me</a>
          <a href="#skills" id='skills-link' onClick={toggleMenu}>Skills</a>
          <a href="#projects" id='projects-link' onClick={toggleMenu}>Projects</a>
          <a href="#experiences" id='experiences-link' onClick={toggleMenu}>Experiences</a>
          <a href="#contact" id='contact-link' onClick={toggleMenu}>Contact</a>
        </div>
        </nav>
  
        <div className="container">
          <section id="about">
            <h2>About Me</h2>
            <div className='aboutme'>
              <img src={pic} alt="Profile" className="profile-pic" />
              <p>Hi, I'm Sudhanshu Singh from Prayagraj, Uttar Pradesh, India. I'm currently pursuing my Bachelor of Technology in Computer Science from the Indian Institute of Information Technology, Sonepat. I have a strong foundation in computer science and have gained practical experience through various internships and projects. I love coding and developing responsive and user-friendly web applications.</p>
            </div>
          </section>
  
          <section id="skills" className="skills">
            <SkillSection />
          </section>
  
          <section id="projects">
            <Projects />
          </section>
        
          <section id="experiences">
            <Experience />
          </section>
          
          <section id="contact" className="section contact">
            <ContactSection />
          </section>
        </div>
        
        <footer>
          <p>&copy; 2024 Sudhanshu Singh</p>
        </footer>
      </div>
    );
  }
  
  
export default App;

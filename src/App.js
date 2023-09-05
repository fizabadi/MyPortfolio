import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProjectManagement from './components/ProjectManagement';
import ProjectCard from './components/ProjectCard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import SignIn from './components/SignIn';
import Contact from './components/Contact';
//import Projects from './components/Projects';
//import Data from './components/Data.json';
function App(){

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project Title 1',
      description: 'Description of Project 1 goes here.',
      technologies: 'HTML, CSS, JavaScript',
      projectLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Project Title 2',
      description: 'Description of Project 2 goes here.',
      technologies: 'Python, Django',
      projectLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Project Title 1',
      description: 'Description of Project 1 goes here.',
      technologies: 'HTML, CSS, JavaScript',
      projectLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Project Title 2',
      description: 'Description of Project 2 goes here.',
      technologies: 'Python, Django',
      projectLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Project Title 1',
      description: 'Description of Project 1 goes here.',
      technologies: 'HTML, CSS, JavaScript',
      projectLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'Project Title 2',
      description: 'Description of Project 2 goes here.',
      technologies: 'Python, Django',
      projectLink: '#',
      githubLink: '#',
    }
  ]);  

  return(
    <>
<Router>
  <Routes>
   <Route path='/'element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/skills' element={<Skills/>}/>
   <Route path='/signIn' element={<SignIn/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path="/Project" element={<ProjectCard projects={projects}/>}/>
   <Route path="/ProjectManagement" element={<ProjectManagement projects={projects} setProjects={setProjects} />}/>
  </Routes>
</Router>
    </>
     );
    }
    export default App ;
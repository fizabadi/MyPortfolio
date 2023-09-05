import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import SignIn from './components/SignIn';
import Contact from './components/Contact';
import Projects from './components/Projects';
//import Projects from './components/Projects';
//import Data from './components/Data.json';
function App(){
  return(
    <>
<Router>
  <Routes>
   <Route path='/'element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/skills' element={<Skills/>}/>
   <Route path='/signIn' element={<SignIn/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/projects' element={<Projects/>}/>
  </Routes>
  
</Router>
    </>
     );
    }
    export default App ;
import {Link} from 'react-router-dom'
import './Home.css';
import Navbar from './Navbar';
export default function Home(){
    
    return(
        <>
        <Navbar />
       <div className="home">
        <div className="max-width">
            <div className="home-content">
            
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Fiza Badi</div>
                <div className="text-3">And I'm a Full Stack Developer</div>
               
                <Link className="btn btn-primary" to="contact">Hire me</Link>
                <Link className="btn btn-primary" to="https://drive.google.com/file/d/1ukjmJg0dAKJcPkJEX_T2Wv3BeUZlotIi/view?usp=sharing">Resume</Link>
              </div>
             
     
        <img src="home.png" alt='home'style={{width:"700px",height:"700px"}}/>
        
  </div>
  </div>
     </>   
    );}
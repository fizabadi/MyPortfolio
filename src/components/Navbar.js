import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="logo.png" alt="logo" style={{ width: "40px", height: "25px" }} />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/experience">
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      
      {
      <div className="navbar-nav ml-auto">
        <Link className="nav-link" to="/signin" >
          SignIn
        </Link>
      </div>
}
    </nav>
    
  );
}

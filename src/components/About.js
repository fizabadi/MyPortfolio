import './About.css';
import Navbar from './Navbar';
export default function About() {
  return (
    <>
    <Navbar />
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="home.png"
              alt="home"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-lg-5">
            <div className="text-font">
              <h2 className="text-1">About Me</h2>
              <p>
                I am an engineering student in the third year of Software Engineering. 
                Through my university studies, I acquired strong skills in the field of software engineering. 
                The various projects and internships that I have carried out have enabled
                me to develop not only my hard skills but also my soft skills.
                Motivated, I know how to adapt, I have a sense of responsibility and organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

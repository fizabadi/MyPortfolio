import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Data from './Data.json'
import './Projects.css';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  let navigate = useNavigate();

  const onClick = () => {
      let path = `/ProjectManagement`;
      navigate(path);
  }

  const addToCartBtn=(index)=>{
    let product = Data[index];
}
  
  console.log(props.projects);
    return (
    //   <div className='container'> 
    //   <h2 class="d-flex justify-content-center">Projects</h2>
    //   <button type="button" onClick={onClick} class="btn btn-primary">Edit</button>
    //   <div className="row">
    //     {project.projects.map((project) => (
    //       <>
    //       <div className="col-md-4">
    //             <div className="card mb-4">
    //               <div className="card-body">
    //                 <h5 className="card-title">{project.title}</h5>
    //                 <p className="card-text">{project.description}</p>
    //                 <p className="card-text">Technologies used: {project.technologies}</p>
    //                 <a href={project.projectLink} className="btn btn-primary">Project Link</a>
    //                 <a href={project.githubLink} className="btn btn-secondary">GitHub Link</a>
    //               </div>
    //           </div>
    //           </div>
    //         </>
    //     ))}
    //   </div>
    //   </div>

    <div className="Projects">
    <h2 class="d-flex justify-content-center">Projects</h2>
    <button type="button" onClick={onClick} class="btn btn-primary">Edit</button>    
    <div className='container mx-auto'>
          <div className='row'>
              {props.projects.map((project)=>{
                  return(
                      <div className='col-sm-4 mt-3'>
                          {/* <img src={project.id}
                          alt="LaptopPhoto" style={{width:"400px"}}/> */}
                          <br/> <b>Title:</b> {project.title}<br/><b>Description:</b> {project.description}<br/><b>Technologies:</b> {project.technologies}<br/><b>Role: </b>{project.projectLink}<br/>
                          {/* <button className='button' onClick={()=>addToCartBtn(index)}>Add to Cart</button> <button classname="link" alt=github value=git name=git photo=12345mane pyema nhti kam nbr kiwb bsove nfoe he,*/}
                          <Link className="link" to={project.githubLink}><button>Github Link</button></Link>
                          </div>
                     )
              })}
          </div>
      </div>
      </div>
    );
}

export default ProjectCard;
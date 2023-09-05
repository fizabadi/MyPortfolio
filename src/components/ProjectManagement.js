import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ProjectManagement.css'; 

function ProjectManagement({ projects, setProjects }) {

    let navigate = useNavigate();

    const onClick = () => {
        let path = `/Project`;
        navigate(path);
    }  

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    projectLink: '',
    githubLink: '',
  });

  const [editProject, setEditProject] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
    setNewProject({
      title: '',
      description: '',
      technologies: '',
      projectLink: '',
      githubLink: '',
    });
  };

  const editProjectById = (id) => {
    const projectToEdit = projects.find((project) => project.id === id);
    setEditProject(projectToEdit);
  };

  const updateProject = () => {
    setProjects(
      projects.map((project) =>
        project.id === editProject.id ? editProject : project
      )
    );
    setEditProject(null);
  };

  const deleteProjectById = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div>
      <h1 class="d-flex justify-content-center">Project Management</h1>
      <div class="text-center">
      <button type="button" onClick={onClick} class="btn btn-primary" >Go To Project</button>
      </div >
      <div class="text-center">
        <h2 class="d-flex justify-content-center">Add Project</h2>
        <div className="container1">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={newProject.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={newProject.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Technologies"
            name="technologies"
            value={newProject.technologies}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Project Link"
            name="projectLink"
            value={newProject.projectLink}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="GitHub Link"
            name="githubLink"
            value={newProject.githubLink}
            onChange={handleInputChange}
          />
          <button onClick={addProject}>Add</button>
        </div>
      </div>
      <div>
        <h2 class="d-flex justify-content-center">Projects</h2>
        <div className='container'> 
        <div className="row">
        {projects.map((project) => (
            <div className="col-md-4" key={project.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">Technologies used: {project.technologies}</p>
                  <p className="card-text">Project Link: {project.projectLink}</p>
                  <p className="card-text">GitHub Link: {project.githubLink}</p>
                  <button className="btn btn-primary" onClick={() => editProjectById(project.id)}>Edit</button>
                  <button className="btn btn-secondary" onClick={() => deleteProjectById(project.id)}>Delete</button>
                  
                  {editProject && editProject.id === project.id && (
                    <div>
                      <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={editProject.title}
                        onChange={(e) => setEditProject({ ...editProject, title: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        value={editProject.description}
                        onChange={(e) => setEditProject({ ...editProject, description: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Technologies"
                        name="technologies"
                        value={editProject.technologies}
                        onChange={(e) => setEditProject({ ...editProject, technologies: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Project Link"
                        name="projectLink"
                        value={editProject.projectLink}
                        onChange={(e) => setEditProject({ ...editProject, projectLink: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="GitHub Link"
                        name="githubLink"
                        value={editProject.githubLink}
                        onChange={(e) => setEditProject({ ...editProject, githubLink: e.target.value })}
                      />
                      <button onClick={updateProject}>Update</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
     </div>
      </div>
            </div>      
    </div>
  );
}

export default ProjectManagement;

import React, { useState, useEffect } from "react";
import fesbach from "../assets/images/portfolio/fesbach.png";
import aggsoga from "../assets/images/portfolio/aggsoga.png";
import bondhair from "../assets/images/portfolio/bondhair.png";
import enaro from "../assets/images/portfolio/enaro.png";

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [selected, setSelected] = useState({});

    useEffect(() => {
        setProjects([
            { thumbnail: fesbach, title: 'FESBACH Schools', description: 'Fesbach Schools is a bla bla bla', tools: 'Wordpress', link: 'http://www.fesbachschools.com' },
            { thumbnail: enaro, title: 'Enaro', description: '', tools: 'ReactJs,NodeJs', link: 'private' },
            { thumbnail: aggsoga, title: 'AGGSOGA', description: '', tools: 'HTML, CSS, JQuery, Wordpress', link: 'https://aggsogaglobal.com' },
            { thumbnail: bondhair, title: 'The Bond Hair', description: '', tools: 'Wordpress', link: 'https://www.thebondhair.com' },
        ])
    }, []);


    const showProjectDetails = (e, project) => {
        setShowDetails(() => ({ [e.target.id]: true }));
        setSelected(project);
    }


    const displayDetails = (project, index) => {
        return (
            <div className="project-details" onMouseLeave={() => { setShowDetails({ [index]: false }) }}>
                <h4 className='text-center my-5'> {project.title} </h4>

                <div className='row'>
                    <p className="col-sm-4"> <b>Tools:</b>  </p>
                    <p className="col-sm-8">{project.tools}</p>
                </div>
                <div className='row'>
                    <p className="col-sm-4"> <b>Description:</b>  </p>
                    <p className='col-sm-8'> {project.description} </p>
                </div>

                <div className='text-center mt-5'>
                    <a className='button button-secondary' href={project.link} target='_blank' rel='noreferrer'> Visit </a>
                </div>
            </div>)
    };

    return (
        <div className="project">
            {console.log(showDetails)}
            {projects.map((project, index) => {
                return (
                    <div className="project-thumbnail" key={index}>
                        <img src={project.thumbnail} alt={`${project.thumbnail}-${index}`} />
                        <div className='project-overlay'
                            id={index}
                            onClick={(e) => showProjectDetails(e, project)}

                        > {project.title} </div>

                        {showDetails[index] && displayDetails(selected, index)}
                    </div>
                )
            })}
        </div>
    )
}
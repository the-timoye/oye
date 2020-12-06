import React, { useState, useEffect } from "react";
import fesbach from "../assets/images/portfolio/fesbach.png";
import aggsoga from "../assets/images/portfolio/aggsoga.png";
import bondhair from "../assets/images/portfolio/bondhair.png";
import enaro from "../assets/images/portfolio/enaro.png";

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([
            { thumbnail: fesbach, title: 'FESBACH Schools', description: '', tools: 'Wordpress', link: 'http://www.fesbachschools.com' },
            { thumbnail: enaro, title: 'Enaro', description: '', tools: 'ReactJs,NodeJs', link: 'private' },
            { thumbnail: aggsoga, title: 'AGGSOGA', description: '', tools: 'HTML, CSS, JQuery, Wordpress', link: 'https://aggsogaglobal.com' },
            { thumbnail: bondhair, title: 'The Bond Hair', description: '', tools: 'Wordpress', link: 'thebondhair.com' },
        ])
    }, []);

    return (
        <div className="project">
            {projects.map((project, index) => {
                return (
                    <div className="project-thumbnail">
                        <img src={project.thumbnail} alt={`${project.thumbnail}-${index}`} />
                        <div className='project-overlay'> {project.title} </div>
                    </div>
                )
            })}
        </div>
    )
}
import React, { useState, useEffect } from "react";
import fesbach from "../assets/images/portfolio/fesbach.png";
import aggsoga from "../assets/images/portfolio/aggsoga.png";
import bondhair from "../assets/images/portfolio/bondhair.png";
import enaro from "../assets/images/portfolio/enaro.png";
import indigo from "../assets/images/indigo.png";

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([
            { thumbnail: enaro, title: 'Enaro', description: 'Collaborating with other devs, I built the "Buy Units" section of the Enaro Web-app - an app that manages estate users meters.', tools: 'ReactJs,NodeJs', link: 'private' },
            { thumbnail: fesbach, title: 'FESBACH Schools', description: 'A website for a Nigerian Secondary School providing a glimpse of the school to prospective students.', tools: 'Wordpress', link: 'http://www.fesbachschools.com' },
            { thumbnail: indigo, title: 'Indigo', description: 'Built the doctors scheduling/calender, and tele-conferencing sections in the Indigo EMR.', tools: 'Laravel, JQuery', link: 'https://indigo.summitech.ng' },
            { thumbnail: aggsoga, title: 'AGGSOGA', description: 'A custom-themed website for an Old Girls` association.', tools: 'HTML, CSS, JQuery, Wordpress', link: 'https://aggsogaglobal.com' },
            { thumbnail: bondhair, title: 'The Bond Hair', description: 'An e-commerce deals with the sales of hair extensions.', tools: 'Wordpress', link: 'https://www.thebondhair.com' },
        ])
    }, []);

    const displayDetails = (project, index) => {
        return (
            <div className="project-details" key={index}>
                <p>
                    <span> <b>Tools:</b> <br /> </span>
                    <span>{project.tools}</span>
                </p>

                <p>
                    <span><b>Description:</b>  <br /></span>
                    <span>{project.description}</span>
                </p>
                {project.link !== 'private' && (
                    <div className='text-center mt-5'>
                        <a className='link __dark' href={project.link} target='_blank' rel='noreferrer'> Visit &rarr;
                    <hr className="link__hr __dark" /> </a>

                    </div>
                )}
            </div>)
    };

    return (
        <div className="project">
            {projects.map((project, index) => {
                return (
                    <div className='project-container'>
                        <div className='project-container__inner'>
                            <div className="project-thumbnail" key={index}>
                                <img src={project.thumbnail} alt={`${project.thumbnail}-${index}`} />
                            </div>
                            {displayDetails(project, index)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
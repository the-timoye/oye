import React, { useState, useEffect } from "react";
import styledIcon from "../assets/images/styledComponent.png";
import mongoIcon from "../assets/images/mongodb.png";
import airflowIcon from "../assets/images/airflowIcon.png";
import firebaseIcon from "../assets/images/firebase.png";
import nodeIcon from "../assets/images/nodejs.png";
import sassIcon from "../assets/images/sass.png";
import reactIcon from "../assets/images/reactjs.png";
import sparkIcon from "../assets/images/sparkIcon.png";
import pandas from "../assets/images/pandasIcon.png";
import tableau from "../assets/images/tableauIcon.svg";
import python from "../assets/images/pythonIcon.png";
import sql from "../assets/images/sql.png";

export const Skills = () => {

    const [state, setState] = useState({
        skills: [],
        showTip: false
    })

    useEffect(() => {
        setState((prev) => ({
            ...prev,
            skills: [
                { icon: reactIcon, name: "React Js" },
                { icon: firebaseIcon, name: "Firebase" },
                { icon: sassIcon, name: "Sass" },
                { icon: python, name: 'Python' },
                { icon: styledIcon, name: 'Styled Components' },
                { icon: airflowIcon, name: 'Apache Airflow' },
                { icon: sparkIcon, name: 'PySpark' },
                { icon: sql, name: 'SQL' },
                { icon: pandas, name: 'Pandas' },
                { icon: tableau, name: 'Tableau' },
                { icon: nodeIcon, name: "Express Js" },
                { icon: mongoIcon, name: 'MongoDB' },

            ]
        }))
    }, []);

    const { skills } = state;
    return (
        <div className="about">
            <p className='about'>
                My Software Engineering journey began in 2015. Between 2015 and now, I have been a Network Admin Intern, Systems Administrator and a Full-Stack dev.
                My interest in Data Science and Engineering drove me to Udacity where I gathered ETL and Data Warehousing skills. I am currently working on some Data Engineering projects and hope to help companies make better business decisions with my skills.

            </p>

            <div className="d-flex flex-wrap justify-content-around">

                {skills.map((skill, index) => {
                    return (
                        <p key={index} className='skills'><img src={skill.icon} alt={`${skill.name}-${index}`} /> {skill.name} </p>
                    );
                })}
            </div>
        </div>
    );
}
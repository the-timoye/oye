import React, { useState, useEffect } from "react";
import styledIcon from "../assets/images/styledComponent.png";
import mongoIcon from "../assets/images/mongodb.png";
import firebaseIcon from "../assets/images/firebase.png";
import nodeIcon from "../assets/images/nodejs.png";
import sassIcon from "../assets/images/sass.png";
import reactIcon from "../assets/images/reactjs.png";
import wpIcon from "../assets/images/wordpress.png";

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
                { icon: nodeIcon, name: "Express Js" },
                { icon: styledIcon, name: 'Styled Components' },
                { icon: mongoIcon, name: 'MongoDB' },
                { icon: wpIcon, name: 'Wordpress' }
            ]
        }))
    }, []);

    const { skills } = state;
    return (
        <div className="about">
            <p className='about'>
                I began software development with the normal basics HTML and CSS shortly after graduation, before "Nigeria called". Soon after service, I worked 14months in a tech company as a System's Administrator, and alongside took part in Andela's #ALCWithUdacity2017 scholarship program, and brushed up my Javascript skills.
                I'm currently a full stack dev in Summitech Computing Ltd. See below my prowess so far:
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
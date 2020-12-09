import React, { useState, useEffect } from "react";
import mongoIcon from "../assets/images/mongodb.png";
import nodeIcon from "../assets/images/nodejs.png";
import reactIcon from "../assets/images/reactjs.png";
import sassIcon from "../assets/images/sass.png";
import styledIcon from "../assets/images/styledComponent.png";

export const Skills = () => {

    const [state, setState] = useState({
        skills: [],
        showTip: false
    })

    useEffect(() => {
        setState({
            skills: [
                { icon: reactIcon, name: "React Js" },
                { icon: sassIcon, name: "Sass" },
                { icon: styledIcon, name: "Styled Components" },
                { icon: nodeIcon, name: "Node Js" },
                { icon: mongoIcon, name: "Mongo DB" },
                { icon: reactIcon, name: "React Js" },
                { icon: sassIcon, name: "Sass" },
                { icon: styledIcon, name: "Styled Components" },
                { icon: nodeIcon, name: "Node Js" },
                { icon: mongoIcon, name: "Mongo DB" },
            ]
        })
    }, []);

    const { skills } = state;
    return (
        <div className="about">
            <p>
                I’m a Software Developer with deep love for code, and everything there is to learn about development. I’m a Software Developer with deep love for code, and everything there is to learn about development. I’m a Software Developer with deep love for code, and everything there is to learn about development
            </p>

            <div className="">
                {skills.map((skill, index) => {
                    return (
                        <img src={skill.icon} alt={skill.name} key={index} />
                    );
                })}
            </div>
        </div>
    );
}
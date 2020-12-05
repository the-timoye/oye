import React, { useState } from "react";
import headerImg from "../assets/images/header.png";
import IG from "../assets/images/instagram.png";
import gitHub from "../assets/images/github.png";
import relpIt from "../assets/images/replit.png";

export const Header = () => {
    const [state, setState] = useState({
        bannerSrc: headerImg,
        mainIntro: "Hi, I'm Timi",
        subIntro: 'I’m a Software Developer with deep love for code, and everything there is to know about Software Development and Data Engineering',
        socialHandles: [
            { image: gitHub, url: 'https://github.com/the-timoye', name: 'Git Hub' },
            { image: IG, url: 'https://instagram.com/thetimoye', name: 'Instagram' },
            { image: relpIt, url: 'https://repl.it/@thetimoye', name: 'Repl It' }
        ]
    });

    const { bannerSrc, mainIntro, subIntro, socialHandles } = state;

    return (
        <header className="home">
            <div className="intro">
                <h2> {mainIntro} </h2>
                <p> {subIntro} </p>
                <>
                    {socialHandles.map(handle => {
                        return (
                            <a href={handle.url} target="_blank" rel="noreferrer" key={handle.name}> <img src={handle.image} alt={handle.name} /> </a>
                        )
                    })}
                </>
            </div>
            <img src={bannerSrc} alt="home-header" />
        </header>
    )
}
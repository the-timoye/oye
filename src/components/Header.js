import React, { useState, useEffect } from "react";
import headerImg from "../assets/images/header.png";
import IG from "../assets/images/instagram.png";
import gitHub from "../assets/images/github.png";
import relpIt from "../assets/images/replit.png";
import { typingAnimation } from "../utility/helpers";

export const Header = () => {
    const [state, setState] = useState({
        introTexts: ["Hi, I'm Timi, aka thetimoye", "I'm a fullstack dev"],
        intro: '',
        delay: 2000,
        bannerSrc: headerImg,
        mainIntro: "Hi, I'm Timi",
        subIntro: 'I’m a Software Developer with deep love for code, and everything there is to know about Software Development and Data Engineering',
        socialHandles: [
            { image: gitHub, url: 'https://github.com/the-timoye', name: 'Git Hub' },
            { image: IG, url: 'https://instagram.com/thetimoye', name: 'Instagram' },
            { image: relpIt, url: 'https://repl.it/@thetimoye', name: 'Repl It' }
        ]
    });


    const { bannerSrc, intro, subIntro, socialHandles } = state;

    useEffect(() => {
        if (state.introTexts.length > 0) {
            typingAnimation(setState, state.introTexts, state.delay);

        }
    }, [state.introTexts, state.delay]);

    return (
        <header className="home">
            <div className="intro">
                <h2 className={state.intro === '' ? 'mb-5' : ''} > {state.intro} </h2>
                <p> {subIntro} </p>
                <>
                    {socialHandles.map(handle => {
                        return (
                            <a href={handle.url} target="_blank" rel="noreferrer" key={handle.name}> <img className='socials' src={handle.image} alt={handle.name} /> </a>
                        )
                    })}
                </>
            </div>
            <img src={bannerSrc} alt="home-header" className='banner' />
        </header>
    )
}
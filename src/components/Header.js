import React, { useState, useEffect } from "react";
import headerImg from "../assets/images/header.png";
import IG from "../assets/images/instagram.png";
import gitHub from "../assets/images/github.png";
import book from "../assets/images/book.svg";
import { typingAnimation } from "../utility/helpers";

export const Header = () => {
    const [state, setState] = useState({
        introTexts: ["Hi, I'm Timi, aka thetimoye", "I'm a fullstack dev"],
        intro: '',
        delay: 2000,
        bannerSrc: headerImg,
        mainIntro: "Hi, I'm Timi",
        subIntro: `Welcome to my space. Scroll to know more about me. 
        If you love this website, my projects, pictures, or just want to do some good, feel free to buy me a book :)`,
        socialHandles: [
            { image: gitHub, url: 'https://github.com/the-timoye', name: 'Git Hub' },
            { image: IG, url: 'https://instagram.com/thetimoye', name: 'Instagram' },
            { image: book, url: 'https://buymeacoffee.com/thetimoye', name: 'Buy Me A Book' }
        ]
    });


    // eslint-disable-next-line no-unused-vars
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
import React, { useState } from 'react';
import logoImg from "../assets/images/logo.png";
import file from "../assets/images/file.png";
import mail from "../assets/images/mail.png";

export const Nav = () => {
    const [state, setState] = useState({
        logo: { src: logoImg, alt: 'logo' },
        resumeImg: { src: file, alt: 'file' },
        mailImg: { src: mail, alt: 'mail' },
        emailAddress: 'thetimoye@gmail.com',
        resumeDoc: ''
    });

    const downloadResume = () => { };

    const { logo, emailAddress, resumeImg, mailImg } = state;

    return (

        <nav>
            <img src={logo.src} alt={logo.alt} className="logo" />

            <div>
                <a href="/" onClick={downloadResume}><img src={resumeImg.src} alt={resumeImg.alt} /></a>
                <a href={`mailto:${emailAddress}`}><img src={mailImg.src} alt={mailImg.alt} /></a>
            </div>
        </nav>
    )
}

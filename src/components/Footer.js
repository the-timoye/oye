import React from 'react';
import chatIcon from '../assets/images/chat.png';

export const Footer = () => {
    return (

        <footer className="footer">
            <span>Copyright &#169; 2020</span>
            <span>Designed and Developed by <a href="/"> thetimoye </a> &#9825;</span>
            <img src={chatIcon} alt='chat' />
        </footer>

    )
}
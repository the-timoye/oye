import React from 'react';
import { Nav } from '../layouts/nav';

import user from '../assets/images/svgs/user.svg';
import ig from '../assets/images/svgs/ig.svg'
import book from '../assets/images/svgs/book.svg'
import github from '../assets/images/svgs/githubcolor.svg'
import linkedin from '../assets/images/svgs/linkedin.svg'
import medium from '../assets/images/svgs/mediumoffwhite.svg'

const Profile = () => {
    return (
        <>
        <Nav />
        <div className='profile'>
            {/* <h2 className='profile__title'>About Cleveland</h2> */}

            <div className='profile__body'>

                <div className='profile__body-img'>
                    <img src={user} alt='timi' />
                </div>

                <div className='profile__body-text'>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum. lorem ipsum lorem ipsum. lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                    </p>
                    <p>
                    lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum
                    </p>
                    <div className='profile__body-social-links'>
                    <a  href='https://linkedin.com/in/oluyinka-oluwatimilehin' rel='noreferrer' target='_blank'><img src={linkedin} alt='avatar' /></a>
                    <a  href='https://medium.com/thetimoye' rel='noreferrer' target='_blank'><img src={medium} alt='avatar' /></a>
                    <a  href='https://github.com/the-timoye'  rel='noreferrer' target='_blank'><img src={github} alt='avatar' /></a>
                    <a  href='https://instagram.com/thetimoye' rel='noreferrer' target='_blank'><img src={ig} alt='avatar' /></a>
                    <a  href='https://buymeacoffee.com/thetimoye' rel='noreferrer' target='_blank'><img src={book} alt='avatar' /></a>
                </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Profile;
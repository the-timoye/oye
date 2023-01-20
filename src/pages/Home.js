import {Link} from 'react-router-dom';

import user from '../assets/images/svgs/user.svg';
import ig from '../assets/images/svgs/ig.svg'
import book from '../assets/images/svgs/book.svg'
import github from '../assets/images/svgs/github.svg'
import linkedin from '../assets/images/svgs/linkedin.svg'
import medium from '../assets/images/svgs/medium.svg'
import { description, fullName, profession, technicalSkills, bio } from '../database/home';

const Home = () => {
    return (
        <div className="home">
            <div className="side_deco" />
            <div className="home__profile-card">
                <div className="home__profile-card__avatar">
                    <img src={user} alt='avatar' />
                </div>
                <h1 className="home__profile-card__name"> {fullName} </h1>
                
                
                <span className="home__profile-card__profession"> {profession} </span>
                <hr className="center-diamond" />

                <span className="home__profile-card__profession"> {technicalSkills} </span>
                <div className='home__profile-card__footer'>
                <a href = 'https://linkedin.com/in/oluwatimilehin-oluyinka' target={'_blank'} rel='no-referer' ><img src={linkedin} alt='avatar' /></a>
                <a href='https://medium.com/thetimoye'><img src={medium} alt='avatar' /></a>
                <a href='https://github.com/the-timoye'><img src={github} alt='github' /></a>
                <a href='https://instagram.com/thetimoye'><img src={ig} alt='instagram' /></a>
                <a href='https://buymeacooffee.com/thetimoye' title='buy me a book'><img src={book} alt='buymeabook' /></a>
                </div>
            </div>
            <div className="home__profile intro">
                <div className="content">
                <span className="home__profile intro__main-text">Hello
                    <small className="home__profile intro__sub-text">{bio}</small>
                </span>

                    <div className="home__profile intro__links">
                        <a className="btn btn-primary" href='/about'>about</a>
                        <a className="btn btn-secondary" href='/resume'>resume</a>
                    </div>

                    <p className="home__profile intro__text">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Home;
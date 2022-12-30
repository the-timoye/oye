import user from '../assets/images/svgs/user.svg'

// import database from '../assets/images/svgs/database.svg'

import ig from '../assets/images/svgs/ig.svg'
import book from '../assets/images/svgs/book.svg'
import github from '../assets/images/svgs/github.svg'
import linkedin from '../assets/images/svgs/linkedin.svg'
import medium from '../assets/images/svgs/medium.svg'

const Home = () => {
    return (
        <div className="home">
            <div className="side_deco" />
            <div className="home__profile-card">
                <div className="home__profile-card__avatar">
                    <img src={user} alt='avatar' />
                </div>
                <h1 className="home__profile-card__name">Timi Oluyinka</h1>
                {/* <div>
                <div className='home__profile-card__dot' /> 
                </div> */}
                <span className="home__profile-card__profession"> Data Engineer</span>
                <div className='home__profile-card__footer'>
                <img src={linkedin} alt='avatar' />
                <img src={medium} alt='avatar' />
                <img src={github} alt='avatar' />
                <img src={ig} alt='avatar' />
                <img src={book} alt='avatar' />
                </div>
            </div>
            <div className="home__profile intro">
                <div className="content">
                <span className="home__profile intro__main-text">Hello
                    <small className="home__profile intro__sub-text">I am not your friend</small>
                </span>

                    <div className="home__profile intro__links">
                        <a className="btn btn-primary" href='#'>Button A</a>
                        <a className="btn btn-secondary" href='#'>Button B</a>
                    </div>

                    <p className="home__profile intro__text">
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    <br /> I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Home;
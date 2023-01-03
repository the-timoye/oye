import React from 'react';
import notfound from '../assets/images/svgs/404.svg';

const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={notfound} alt='Page Not Found' />


            <div className='notfound__btns'>
                <a href='/' className='btn btn-primary'>go home</a>
                <a href='/resume' className=' btn btn-secondary'>resume</a>
            </div>
        </div>
    )
}

export default NotFound;
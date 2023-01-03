import React from 'react';

export const Nav = () => {
    return (
        <div className='nav'>
            <nav>
            <span> <span className='dot black ml'/> timi</span>
            <ul>

                <li>
                    <a className='nav_link' href="/">home</a>
                </li>
                <li>
                    <a className='nav_link' href="/about">About</a>
                </li>
                <li>
                    <a className='nav_link' href="/resume">Resume</a>
                </li>
                
                <a className='nav_link btn btn-primary' href="/contact">Reach Out</a>

            </ul>
        </nav>
        </div>
    )
}
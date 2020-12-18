import React, { useEffect, useState } from 'react';
import nTheatre from '../assets/images/national-theatre.jpg';
import cowsImage from '../assets/images/cowsthem.jpg';
import GRA from '../assets/images/gra.jpg';

export const Hobbies = () => {
    const [state, setState] = useState({
        intro: 'Asides Software development, enjoy reading novels (Christian, History and Science fictions), photography (for my love for nature) & browsing through art works',
        books: [],
        pictures: []
    });

    useEffect(() => {
        setState((prev) => ({
            ...prev,
            books: [{ title: 'The Best Laid Plans', author: 'S. Sheldon' }, { title: 'Piercing the Darkness', author: 'F. Peretti' }, { title: 'Throne of Glass Series', author: 'S. J. Mass' }, { title: 'The DaVinci Code', author: 'D. Brown' }],
            pictures: [{ source: GRA, title: 'thetimoyes-image-gra' }, { source: nTheatre, title: 'thetimoyes-image-theatre' }, { source: cowsImage, title: 'thetimoyes-image-cows' }]
        }));
    }, []);

    return (
        <div className="hobbies">
            <p className='my-5 text-center'> {state.intro} </p>
            <div className='hobbies-content'>
                <div className='w-50'>
                    <p className='mb-5'> Some of my favorite books are: </p>
                    {state.books && state.books.map((book, index) => {
                        return (
                            <div className='hobbies__books my-3 w-75'>
                                <span className='w-75' key={index}> {book.title} </span>
                                <span className='' key={index}> {book.author} </span>
                            </div>
                        )
                    })}
                </div>
                <div className='hobbies-content__photos'>
                    <p className='mb-5'> Some Images I shot (from my love for art) </p>
                    {state.pictures && state.pictures.map((picture, index) => {
                        return (
                            <img src={picture.source} alt={`${index}-${picture.title}`} />
                        )
                    })}
                    <br />
                    <a className='link __light float-right' href='https://www.instagram.com/thetimoye' target='_blank' rel='noreferrer'>see more &rarr;
                    <hr className="link__hr __light" />
                    </a>

                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { Nav } from '../layouts/nav';
import {name, professionalExperience, location, email, volunteerExperience, skills, languages, degrees, interests} from '../database/reusme';


const Resume = () => {
    return (
        <>
        <Nav />
        {/* <div className='bg-dark'>/ */}

            <div className='resume'>
                <div className='resume__heading'>
                    <p className='resume__heading-profile__name'>{name}</p>
                    <div className='resume__heading-profile__details'>
                        <span className='resume__heading-profile__details-email'>{email}</span> 
                        <span className='resume__heading-profile dot' />
                        <span className='resume__heading-profile__details-location'>{location}</span>
                    </div>
                </div>

                <div className='resume__content' onContextMenu={() => {return false;}} onContextMenuCapture={() => {return false;}}>
                    
                    <div className='resume__experience'>
                        
                        <section className='resume__body section profession'>
                            <h4 className='resume__body-title'>Professional</h4>

                            {professionalExperience.map(({title, company, duties, dateRange, location}) => 
                              { return ( <div className='resume__body-item'>
                                <div className='resume__body-item-intro'>
                                    <p className='resume__body-item-heading font-bold'>{title} <span className='color-green font-bold'> &nbsp; ~ &nbsp; </span> <span className='resume__body-item-date'>{dateRange}</span></p>
                                    <p className='resume__body-item-subheading'>{company}</p>
                                </div>
                                <div className='resume__body-item__card'>
                                    <p className='resume__body-item__card-list'>
                                    <ul>
                                        {duties.map( (duty)=> { return (
                                            <li> <span className='color-green font-bold'>~</span> {duty}</li>
                            )})}
                                    </ul>
                                    </p>
                                    <p className='resume__body-item__card-list'></p>
                                    <p className='resume__body-item__card-list'></p>
                                </div>
                            </div>)
                            })}

                           
                        </section>
                        <hr className="center-diamond" />
                        <section className='resume__body section volunteer'>
                            <h4 className='resume__body-title'>Volunteer</h4>
                            {volunteerExperience.map(({title, company, duties, dateRange, location}) => 
                              { return ( <div className='resume__body-item'>
                                <div className='resume__body-item-intro'>
                                    <p className='resume__body-item-heading'>{title} <span className='color-green font-bold'> &nbsp; ~ &nbsp; </span> <span className='resume__body-item-date'>{dateRange}</span></p>
                                    <p className='resume__body-item-subheading'>{company}</p>
                                </div>
                                <div className='resume__body-item__card'>
                                    <p className='resume__body-item__card-list'>
                                    <ul>
                                        {duties.map( (duty)=> {
                                            return (<li> <span className='color-green font-bold'>~</span> {duty}</li>)
                                        })}
                                    </ul>
                                    </p>
                                    <p className='resume__body-item__card-list'></p>
                                    <p className='resume__body-item__card-list'></p>
                                </div>
                            </div>)
                            })}
   
                        </section>
                    </div>
                    <div className='resume__skills'>
                        <section className='resume__body section skills'>
                        <h4 className='resume__body-title'>Skills</h4>
                        <div className='resume__body-item'>
                          
                            {skills.map((group) => { return (
                                <>
                              <span className='font-semi-bold'>{group.title}</span>
                                <ul>
                                    {group.content.map((content) => {return (
                                        <li> <span className='color-green m-auto font-semi-light'> &nbsp; ~ &nbsp; </span> {content}</li>
                                    )})}
                                </ul>
                                <span className='color-green m-auto font-semi-light'> &nbsp; ~ &nbsp; </span>
                                </>
                            )})}
                         
                        </div>
                        </section>

                        <section className='resume__body section education'>
                            <h4 className='resume__body-title'>Education</h4>
                            {degrees.map(degree => {return (
                                <div className='resume__body-item'>
                                    <div className='resume__body-item-intro'>
                                        <p className='resume__body-item-heading'>{degree.award === 'B.Sc' ? degree.award : ''} {degree.major}</p>
                                        <p className='resume__body-item-subheading'>{degree.university} <span className='color-green font-bold'>~</span> {degree.award}</p>
                                        <span className='resume__body-item-subheading'>{degree.year}</span>
                                    </div>
                                </div>
                            )} )}
                        </section>

                        <section className='resume__body section languages'>
                        <h4 className='resume__body-title'>Languages</h4>
                        <div className='resume__body-item'>
                            <ul>
                                {languages.map(language => {
                                    return (
                                        <li> <span className='color-green font-bold'>~</span> {language}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        </section>

                        <section className='resume__body section interests'>
                        <h4 className='resume__body-title'>Interests</h4>
                        <div className='resume__body-item'>
                            <ul>
                                {interests.map(interest => {
                                    return (
                                        <li> <span className='color-green font-bold'>~</span> {interest}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        </section>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    )
}

export default Resume;
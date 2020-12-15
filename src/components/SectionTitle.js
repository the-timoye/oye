import React from "react";
import PropTypes from "prop-types"
import ScrollAnimation from 'react-animate-on-scroll';

export const SectionTitle = ({ title }) => {
    return (

        <div className="section-title">
            <hr className="section-title__hr" />
            <h3> {title} </h3>
            <hr className="section-title__hr" />

        </div >

    )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}
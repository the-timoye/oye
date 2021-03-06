import React from "react";
import PropTypes from "prop-types"

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
import React from 'react';
import { Nav, Header, SectionTitle, Skills, Projects } from "../components";

export const Home = () => {
    return (
        <>
            <Nav />
            <Header />
            <SectionTitle title={"My Skills"} />
            <Skills />
            <SectionTitle title={"Projects"} />
            <Projects />
            <SectionTitle title={"Hobbies"} />
        </>
    )
}
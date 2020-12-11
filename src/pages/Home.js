import React from 'react';
import { Nav, Header, SectionTitle, Skills, Projects, Hobbies, Footer } from "../components";

export const Home = () => {
    return (
        <>
            <Nav />
            <Header />
            <SectionTitle title={"About Me"} />
            <Skills />
            <SectionTitle title={"Projects"} />
            <Projects />
            <SectionTitle title={"Hobbies"} />
            <Hobbies />
            <Footer />
        </>
    )
}
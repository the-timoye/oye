import React from 'react';
import renderer from 'react-test-renderer';
import { Nav } from '../../components';
import Home from "../../pages/Home";

describe('Home page tests', () => {

    const HomeInstance = renderer.create(<Home />);

    it('renders correctly', () => {
        expect(HomeInstance).toMatchSnapshot();
    });

    it('has a navigation bar', () => {
        const NavInstance = HomeInstance.root.findByType(Nav);
        expect(NavInstance).toBeTruthy();
    });

    it('has an about section', () => {
        const AboutInstance = HomeInstance.root.findByProps({ className: 'about' });
        expect(AboutInstance).toBeTruthy();
    });

    it('has a projects section', () => {
        const ProjectsInstance = HomeInstance.root.findByProps({ className: 'project' });
        expect(ProjectsInstance).toBeTruthy();
    });

    it('has a hobbies section', () => {
        const HobbiesInstance = HomeInstance.root.findByProps({ className: 'hobbies' });
        expect(HobbiesInstance).toBeTruthy();
    });

    it('has a footer', () => {
        const FooterInstance = HomeInstance.root.findByProps({ className: 'footer' });
        expect(FooterInstance).toBeTruthy();
    });

});

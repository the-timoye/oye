import React from 'react';
import renderer from 'react-test-renderer';
import { Nav } from '../../components';


describe('Navigation Bar Tests', () => {
    const NavRenderer = renderer.create(<Nav />);
    const NavInstance = NavRenderer.root;
    // NavInstance.instance

    it('renders correctly', () => {
        expect(NavRenderer).toMatchSnapshot();
    });

    it('should have a nav element with two children', () => {
        const nav = NavInstance.findByType('nav');
        expect(nav).toBeTruthy();
        expect(nav.children.length).toBeGreaterThan(1);
    });

    it('should contain a logo', () => {
        const logo = NavInstance.findByProps({ className: 'logo' });
        expect(logo).toBeTruthy();
    });

    it('should have alt texts for images', () => {
        const navLinksContainer = NavInstance.findByType('div');
        const images = navLinksContainer.findAllByType('img');

        expect(images.length).toBeGreaterThan(1);
        images.forEach(image => {
            expect(image.props.alt).toBeTruthy();
        });
    });

    it('tests nav links', () => {
        const navLinksContainer = NavInstance.findByType('div');
        const links = navLinksContainer.findAllByType('a');
        const cvLink = links[0];

        links.forEach(image => {
            expect(image.props.href).toBeTruthy();
        });
        expect(navLinksContainer.children.length).toBeGreaterThan(1);
        expect(cvLink.props.rel).toEqual('noreferrer');
    })

});
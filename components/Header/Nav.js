import { Flex, Image, Menu } from '@chakra-ui/react';
import React from 'react';

function Nav() {
    return (
        <Flex justifyContent='space-between'>
            <Image h='1.5rem' src='/logo.svg' />
            <Image h='1rem' src='/icon-hamburger.svg' />
            <ul style={{ display: 'none' }}>
                <li>
                    Product
                    <ul>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </li>
                <li>
                    Company
                    <ul>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </li>
                <li>
                    Connect
                    <ul>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                </li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </Flex>
    );
}

export default Nav;

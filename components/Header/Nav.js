import { Flex, Image, HStack, Link, Box, Slide } from '@chakra-ui/react';
import React from 'react';
import { Close, Hamburger } from '../Icons';
import IconLink from './IconLink';
import NavMenuItemDesktop from './NavMenuItemDesktop';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

function Nav() {
    // Testing mobile menu
    const [active, setActive] = useState(false);
    const toggleMobileMenu = () => {
        setActive(!active);
    };
    return (
        <Flex justifyContent='space-between' alignItems='center'>
            <Image h='1.5rem' src='/logo.svg' alt='blogr logo' />
            <Image
                h='1rem'
                src='/icon-hamburger.svg'
                display={('block', 'none')}
                alt='hamburger icon'
            />
            {/* Mobile Menu */}
            <Box d={{ md: 'none' }}>
                {!active ? (
                    <IconLink icon={<Hamburger />} onClick={toggleMobileMenu} />
                ) : (
                    <IconLink icon={<Close />} onClick={toggleMobileMenu} />
                )}
                {active ? <MobileMenu /> : ''}
                {/* <MobileMenu /> */}
            </Box>
            {/* Desktop Menu */}
            <Box
                flexGrow='1'
                display={{ base: 'none', md: 'flex' }}
                justifyContent='space-between'
            >
                <HStack ml='4rem' spacing='2rem'>
                    <NavMenuItemDesktop
                        title='Product'
                        items={[
                            'Overview',
                            'Pricing',
                            'Marketplace',
                            'Features',
                            'Integrations',
                        ]}
                    />
                    <NavMenuItemDesktop
                        title='Company'
                        items={['About', 'Team', 'Blog']}
                    />
                    <NavMenuItemDesktop
                        title='Connect'
                        items={['Contact', 'Newsletter', 'LinkedIn']}
                    />
                </HStack>
                <HStack>
                    <Link mr='2rem'>Login</Link>
                    <Link
                        _hover={{
                            bg: 'whiteAlpha.500',
                            color: 'white',
                        }}
                        color='lightRed'
                        bg='white'
                        py='.6rem'
                        display='inline-block'
                        borderRadius='1.5rem'
                        width='150px'
                        textAlign='center'
                    >
                        Sign Up
                    </Link>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Nav;

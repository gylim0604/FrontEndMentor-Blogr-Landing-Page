import { Flex, Image, HStack, Link, Box } from '@chakra-ui/react';
import React from 'react';
import { Close, Hamburger } from '../Icons';
import IconLink from './IconLink';
import NavMenuItemDesktop from './NavMenuItemDesktop';
import { useState } from 'react';

function Nav() {
    // Testing mobile menu
    const [state, setstate] = useState(false);
    const toggleMobileMenu = () => {
        setstate(!state);
        alert(state);
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
            <Box>
                <IconLink
                    icon={<Hamburger />}
                    isVisible={true}
                    onClick={toggleMobileMenu}
                />
                <IconLink icon={<Close />} onClick={() => alert('hello')} />
            </Box>
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
                        items={[
                            'Contact',
                            'Newsletter',
                            'LinkedIn',
                            'Features',
                            'Integrations',
                        ]}
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

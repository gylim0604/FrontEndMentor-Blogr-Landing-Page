import {
    Flex,
    Image,
    HStack,
    Link,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import React from 'react';
import { Close, Hamburger } from '../Icons';
import IconLink from './IconLink';
import NavMenuItemDesktop from './NavMenuItemDesktop';
import { useState } from 'react';
import NavMenuItemMobile from './NavMenuItemMobile';

function Nav() {
    // Testing mobile menu
    const [active, setActive] = useState(false);
    const toggleMobileMenu = () => {
        setActive(!active);
        // alert(active);
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
                {!active ? (
                    <IconLink icon={<Hamburger />} onClick={toggleMobileMenu} />
                ) : (
                    <IconLink icon={<Close />} onClick={toggleMobileMenu} />
                )}
                {active ? (
                    <Flex
                        flexDir='column'
                        pos='absolute'
                        w='84vw'
                        maxW='375px'
                        bg='white'
                        top='7rem'
                        left='0'
                        color='vDarkBlue'
                        mx='8vw'
                        textAlign='center'
                        p='2rem'
                        boxShadow='2xl'
                        borderRadius='5px'
                    >
                        <NavMenuItemMobile
                            title='Product'
                            items={[
                                'Overview',
                                'Pricing',
                                'Marketplace',
                                'Features',
                                'Integrations',
                            ]}
                        />
                        <NavMenuItemMobile
                            title='Company'
                            items={['About', 'Team', 'Blog']}
                        />
                        <NavMenuItemMobile
                            title='Connect'
                            items={['Contact', 'Newsletter', 'LinkedIn']}
                        />
                        <hr />
                        <Link
                            py='.75rem'
                            d='inline-block'
                            alignSelf='center'
                            width='150px'
                            textAlign='center'
                        >
                            Login
                        </Link>
                        <Link
                            bg='linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))'
                            color='white'
                            py='.75rem'
                            d='inline-block'
                            alignSelf='center'
                            borderRadius='1.5rem'
                            width='150px'
                            textAlign='center'
                        >
                            Sign Up
                        </Link>
                    </Flex>
                ) : (
                    ''
                )}
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

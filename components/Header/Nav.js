import {
    Flex,
    Image,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    HStack,
    Link,
    Box,
} from '@chakra-ui/react';
import React from 'react';
import NavMenuItemDesktop from './NavMenuItemDesktop';

function Nav() {
    return (
        <Flex justifyContent='space-between' alignItems='center'>
            <Image h='1.5rem' src='/logo.svg' alt='blogr logo' />
            <Image
                h='1rem'
                src='/icon-hamburger.svg'
                display={('block', 'none')}
                alt='hamburger icon'
            />
            <Box
                flexGrow='1'
                display={['none', 'flex']}
                justifyContent='space-between'
            >
                <HStack ml='4rem' spacing='2rem' display={['none', 'flex']}>
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

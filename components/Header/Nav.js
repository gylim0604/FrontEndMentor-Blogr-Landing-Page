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
                    <Menu placement='top'>
                        <MenuButton
                            _hover={{
                                textDecoration: 'underline',
                            }}
                        >
                            Product
                        </MenuButton>
                        <MenuList mt='1rem' color='black'>
                            <MenuItem
                                fontWeight='300'
                                _hover={{ fontWeight: '900' }}
                            >
                                Overview
                            </MenuItem>
                            <MenuItem>Pricing</MenuItem>
                            <MenuItem>Marketplace</MenuItem>
                            <MenuItem>Features</MenuItem>
                            <MenuItem>Integrations</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton
                            _hover={{
                                textDecoration: 'underline',
                            }}
                        >
                            Company
                        </MenuButton>
                        <MenuList>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Team</MenuItem>
                            <MenuItem>Blog</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton
                            _hover={{
                                textDecoration: 'underline',
                            }}
                        >
                            Connect
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Contact</MenuItem>
                            <MenuItem>Newsletter</MenuItem>
                            <MenuItem>LinkedIn</MenuItem>
                        </MenuList>
                    </Menu>
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

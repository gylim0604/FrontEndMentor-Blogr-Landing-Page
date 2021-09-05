import { Flex, Link } from '@chakra-ui/react';
import React from 'react';
import NavMenuItemMobile from './NavMenuItemMobile';
import { useState } from 'react';
function MobileMenu() {
    const [dropDown, setDropDown] = useState(null);
    const toggleSubMenu = (menu) => {
        dropDown === menu ? setDropDown(null) : setDropDown(menu);
    };
    return (
        <Flex
            flexDir='column'
            pos='absolute'
            w='84vw'
            // maxW='375px'
            bg='white'
            top='7rem'
            left='0'
            color='vDarkBlue'
            mx='8vw'
            textAlign='center'
            p='2rem'
            boxShadow='2xl'
            borderRadius='5px'
            transition='all 1s ease-out'
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
                onClick={() => toggleSubMenu('Product')}
                isOpen={dropDown === 'Product'}
            />
            <NavMenuItemMobile
                title='Company'
                items={['About', 'Team', 'Blog']}
                onClick={() => toggleSubMenu('Company')}
                isOpen={dropDown === 'Company'}
            />
            <NavMenuItemMobile
                title='Connect'
                items={['Contact', 'Newsletter', 'LinkedIn']}
                onClick={() => toggleSubMenu('Connect')}
                isOpen={dropDown === 'Connect'}
            />
            <hr style={{ marginTop: '1rem' }} />
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
    );
}

export default MobileMenu;

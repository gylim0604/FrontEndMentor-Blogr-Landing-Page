import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import { ArrowDownLight } from '../Icons';
import { HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
function NavMenuItemDesktop({ title, items }) {
    const [active, setActive] = useState(false);
    const toggleMenu = () => {
        setActive(!active);
    };
    return (
        <Menu
            placement='top'
            onOpen={() => toggleMenu()}
            onClose={() => toggleMenu()}
        >
            <MenuButton
                _hover={{
                    textDecoration: 'underline',
                }}
            >
                <HStack alignItems='baseline'>
                    <Text color='whiteAlpha.800'>{title}</Text>
                    <ArrowDownLight flip={active} />
                </HStack>
            </MenuButton>

            <MenuList minWidth='175px' mt='1rem' color='black' py='1rem'>
                {items.map((item, idx) => {
                    return (
                        <MenuItem
                            w='50px'
                            px='2rem'
                            key={idx}
                            fontWeight='00'
                            _hover={{ fontWeight: '600', bg: 'transparent' }}
                            _focus={{ bg: 'transparent' }}
                        >
                            {item}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

export default NavMenuItemDesktop;

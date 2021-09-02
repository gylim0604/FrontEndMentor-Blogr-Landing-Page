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
                    <Text>{title}</Text>
                    <ArrowDownLight flip={active} />
                </HStack>
            </MenuButton>

            <MenuList mt='1rem' color='black'>
                {items.map((item, idx) => {
                    return (
                        <MenuItem
                            key={idx}
                            fontWeight='300'
                            _hover={{ fontWeight: '900', bg: 'transparent' }}
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

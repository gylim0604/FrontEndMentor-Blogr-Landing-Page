import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import { ArrowDownLight } from '../Icons';
import { Image, HStack, Text } from '@chakra-ui/react';
function NavMenuItemDesktop({ title, items }) {
    return (
        <Menu placement='top'>
            <MenuButton
                _hover={{
                    textDecoration: 'underline',
                    // transform: 'rotate(180deg)',
                }}
            >
                <HStack alignItems='baseline'>
                    <Text>{title}</Text>
                    <ArrowDownLight />
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

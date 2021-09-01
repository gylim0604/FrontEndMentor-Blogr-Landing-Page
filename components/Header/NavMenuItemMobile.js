import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { ArrowDownDark } from '../Icons';

function NavMenuItemMobile({ title, items }) {
    const [active, setActive] = useState(false);
    const toggleSubMenu = () => {
        setActive(!active);
    };
    return (
        <Box my={1}>
            <Link
                d='inline-block'
                onClick={toggleSubMenu}
                my={2}
                _hover={{ textDecoration: 'none' }}
            >
                <HStack as='span' d='flex' alignItems='baseline'>
                    <Text>{title}</Text>
                    <ArrowDownDark />
                </HStack>
            </Link>
            {active ? (
                <Flex
                    flexDir='column'
                    bg='grayBlue'
                    borderRadius='2px'
                    mt='1rem'
                    py={4}
                >
                    {items.map((item, idx) => {
                        return (
                            <Link
                                key={idx}
                                _hover={{ textDecoration: 'none' }}
                                color='vGrayBlue'
                                my={1}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </Flex>
            ) : (
                ''
            )}
        </Box>
    );
}

export default NavMenuItemMobile;

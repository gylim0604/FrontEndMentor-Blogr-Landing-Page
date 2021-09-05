import { Box, Collapse, Flex, HStack, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { ArrowDownDark } from '../Icons';

function NavMenuItemMobile({ title, items, isOpen, onClick }) {
    return (
        <Box my={1}>
            <Link
                d='inline-block'
                onClick={onClick}
                my={2}
                _hover={{ textDecoration: 'none' }}
            >
                <HStack as='span' d='flex' alignItems='center'>
                    <Text
                        fontWeight='600'
                        color={isOpen ? 'hsl(240, 2%,45%)' : ''}
                    >
                        {title}
                    </Text>
                    <ArrowDownDark flip={isOpen} />
                </HStack>
            </Link>
            <Collapse in={isOpen} animateOpacity>
                <Flex
                    flexDir='column'
                    bg=' hsl(240, 2%, 90%)'
                    borderRadius='2px'
                    mt='1rem'
                    py={4}
                >
                    {items.map((item, idx) => {
                        return (
                            <Link
                                key={idx}
                                _hover={{ textDecoration: 'none' }}
                                color='hsl(240, 2%,45%)'
                                my={1}
                                fontWeight='600'
                            >
                                {item}
                            </Link>
                        );
                    })}
                </Flex>
            </Collapse>
        </Box>
    );
}

export default NavMenuItemMobile;

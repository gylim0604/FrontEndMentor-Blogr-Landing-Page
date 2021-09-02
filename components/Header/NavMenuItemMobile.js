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
                    <Text>{title}</Text>
                    <ArrowDownDark flip={isOpen} />
                </HStack>
            </Link>
            <Collapse in={isOpen} animateOpacity>
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
            </Collapse>
        </Box>
    );
}

export default NavMenuItemMobile;

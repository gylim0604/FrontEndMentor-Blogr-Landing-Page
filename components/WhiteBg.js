import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function WhiteBg({ title, text }) {
    return (
        <Flex flexDir='column' my='1.5rem'>
            <Heading color='vDarkBlue' mb='1.5rem'>
                {title}
            </Heading>
            <Text color='vGrayBlue' lineHeight='2rem'>
                {text}
            </Text>
        </Flex>
    );
}

export default WhiteBg;

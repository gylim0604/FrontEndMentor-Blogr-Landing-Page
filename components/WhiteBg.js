import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function WhiteBg({ title, text }) {
    return (
        <Flex flexDir='column'>
            <Heading color='vDarkBlue'>{title}</Heading>
            <Text color='vGrayBlue'>{text}</Text>
        </Flex>
    );
}

export default WhiteBg;

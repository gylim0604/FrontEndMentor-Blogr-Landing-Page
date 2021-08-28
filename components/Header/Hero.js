import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';

function Hero() {
    return (
        <Flex mt='5rem' flexDir='column' alignItems='center' textAlign='center'>
            <Heading as='h1' lineHeight='2.5rem' my={5}>
                A modern publishing platform
            </Heading>
            <Heading as='h3' fontSize='sm'>
                Grow your audience and build your online brand
            </Heading>
            <Box mt='3rem'>
                <Link
                    color='lightRed'
                    bg='white'
                    px={3}
                    py={2}
                    display='inline-block'
                    borderRadius='1.5rem'
                    mr={2}
                >
                    Start for Free
                </Link>
                <Link
                    border='1px solid white'
                    px={3}
                    py={2}
                    display='inline-block'
                    borderRadius='1.5rem'
                    ml={2}
                >
                    Learn More
                </Link>
            </Box>
        </Flex>
    );
}

export default Hero;

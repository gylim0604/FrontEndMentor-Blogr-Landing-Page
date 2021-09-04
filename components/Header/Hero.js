import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';

function Hero() {
    return (
        <Flex mt='5rem' flexDir='column' alignItems='center' textAlign='center'>
            <Heading
                as='h1'
                lineHeight='2.5rem'
                my={5}
                fontFamily='Overpass'
                fontWeight='600'
            >
                A modern publishing platform
            </Heading>
            <Heading
                as='h3'
                fontSize='sm'
                fontFamily='Overpass'
                fontWeight='300'
            >
                Grow your audience and build your online brand
            </Heading>
            <Box mt='3rem'>
                <Link
                    color='lightRed'
                    bg='white'
                    py={[2, '.6rem']}
                    display='inline-block'
                    borderRadius='1.5rem'
                    mr={2}
                    width='150px'
                    _hover={{
                        bg: 'whiteAlpha.500',
                        color: 'white',
                    }}
                >
                    Start for Free
                </Link>
                <Link
                    border='1px solid white'
                    py={[2, '.6rem']}
                    display='inline-block'
                    borderRadius='1.5rem'
                    ml={2}
                    width='150px'
                    _hover={{
                        bg: 'white',
                        color: 'lightRed',
                    }}
                >
                    Learn More
                </Link>
            </Box>
        </Flex>
    );
}

export default Hero;

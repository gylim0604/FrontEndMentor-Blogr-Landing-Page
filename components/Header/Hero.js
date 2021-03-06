import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';

function Hero() {
    return (
        <Flex
            mt='5rem'
            flexDir='column'
            alignItems='center'
            textAlign='center'
            mb={{ md: '5rem' }}
        >
            <Heading
                as='h1'
                lineHeight='2.5rem'
                my={{ base: 5, md: '5rem' }}
                mb={{ base: '2rem', md: '1.5rem' }}
                fontSize={{ base: '2.4rem', md: '4rem' }}
                fontFamily='Overpass'
                fontWeight='600'
            >
                A modern publishing platform
            </Heading>
            <Heading
                as='h3'
                fontSize='1.25rem'
                fontFamily='Overpass'
                fontWeight='300'
                color='whiteAlpha.800'
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
                    width={{ base: '130px', md: '150px' }}
                    _hover={{
                        bg: 'whiteAlpha.500',
                        color: 'white',
                    }}
                    fontFamily='Ubuntu'
                    fontWeight='700'
                >
                    Start for Free
                </Link>
                <Link
                    border='1px solid white'
                    py={[2, '.6rem']}
                    display='inline-block'
                    borderRadius='1.5rem'
                    ml={2}
                    width={{ base: '130px', md: '150px' }}
                    _hover={{
                        bg: 'white',
                        color: 'lightRed',
                    }}
                    fontFamily='Ubuntu'
                    fontWeight='700'
                >
                    Learn More
                </Link>
            </Box>
        </Flex>
    );
}

export default Hero;

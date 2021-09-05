import React from 'react';
import { Box, Flex, Img, Text } from '@chakra-ui/react';
import WhiteBg from './WhiteBg';

function Section3() {
    return (
        <Box
            px={{ base: '8vw', md: '10rem' }}
            // mt={{ base: '4rem', md: '10rem' }}
            my={{ base: '0', md: '10rem' }}
            textAlign='center'
        >
            <Flex
                flexDir={{ base: 'column', md: 'row' }}
                position={{ base: 'inherit', md: 'relative' }}
            >
                <Box as='picture'>
                    <Box
                        as='source'
                        media='(min-width: 720px)'
                        srcSet='/illustration-laptop-desktop.svg'
                    />
                    <Img
                        src='/illustration-laptop-mobile.svg'
                        alt='illustration of a laptop'
                        h={{ md: '50rem' }}
                        position={{ md: 'absolute' }}
                        left={{ md: '0' }}
                        transform={{ md: 'translateX(-40%)' }}
                        top={{ md: '-8rem' }}
                    />
                </Box>

                <Flex
                    ml={{ base: '0', md: '650px' }}
                    mt='4rem'
                    flexDir='column'
                    w={{ md: '40rem' }}
                    textAlign={{ base: 'center', md: 'left' }}
                >
                    <WhiteBg
                        title='Free, open, simple'
                        text='Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
                        headingSize='1.75rem'
                    />
                    <WhiteBg
                        title='Powerful tooling'
                        text='Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.'
                        headingSize='1.75rem'
                    />
                </Flex>
            </Flex>
        </Box>
    );
}

export default Section3;

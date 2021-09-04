import { Flex, Box, Img, Text } from '@chakra-ui/react';
import React from 'react';
import WhiteBg from './WhiteBg';

function Section1() {
    return (
        <Box
            px={{ base: '8vw', md: '10rem' }}
            mt={{ base: '4rem', md: '10rem' }}
            textAlign='center'
        >
            <WhiteBg title='Designed for the future' />
            <Flex
                flexDir={{ base: 'column', md: 'row' }}
                h='50rem'
                position={{ base: 'inherit', md: 'relative' }}
            >
                <Box as='picture'>
                    <Box
                        as='source'
                        media='(min-width: 720px)'
                        srcSet='/illustration-editor-desktop.svg'
                    />
                    <Img
                        src='/illustration-editor-mobile.svg'
                        alt='illustration of editor'
                        h={{ md: '57rem' }}
                        position={{ base: 'inherit', md: 'absolute' }}
                        right='0'
                        top='-11rem'
                        transform={{ md: 'translateX(44%)' }}
                    />
                </Box>
                <Flex
                    mr={{ base: '0', md: '650px' }}
                    mt='3rem'
                    flexDir='column'
                    w={{ md: '40rem' }}
                    textAlign={{ base: 'center', md: 'left' }}
                >
                    <WhiteBg
                        title='Introducing an extensible editor'
                        text='Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports
            management of multiple blogs and allows easy manipulation of
            embeds such as images, videos, and Markdown. Extensibility with
            plugins and themes provide easy ways to add functionality or
            change the looks of a blog.'
                        headingSize='1.75rem'
                    />
                    <WhiteBg
                        title='Robust content management'
                        text='Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.'
                        headingSize='1.75rem'
                    />
                </Flex>
            </Flex>
        </Box>
    );
}

export default Section1;

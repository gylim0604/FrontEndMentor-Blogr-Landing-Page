import { Flex, Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import WhiteBg from './WhiteBg';

function Section1() {
    return (
        <Box
            px={{ base: '8vw', md: '10%' }}
            mt={{ base: '4rem', md: '10rem' }}
            textAlign='center'
            maxW='1300px'
        >
            <WhiteBg title='Designed for the future' />
            <Flex flexDir={{ base: 'column', md: 'row' }} h='60rem'>
                {/* <Heading>Designed for the future</Heading> */}

                <Image
                    src='/illustration-editor-mobile.svg'
                    alt='illustration of editor'
                    h={{ base: 'auto', md: '57rem' }}
                    w='auto'
                    position={{ base: 'inherit', md: 'absolute' }}
                    right='-16rem'
                    // transform='translateX(30%)'
                    top='32rem'
                />
                <Flex
                    mt='3rem'
                    flexDir='column'
                    w={{ base: 'auto', md: '40rem' }}
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
                    />
                    <WhiteBg
                        title='Robust content management'
                        text='Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.'
                    />
                </Flex>
            </Flex>
        </Box>
    );
}

export default Section1;

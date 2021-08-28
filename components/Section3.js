import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import WhiteBg from './WhiteBg';

function Section3() {
    return (
        <Flex flexDir='column' px={5} textAlign='center'>
            <Image
                src='/illustration-laptop-mobile.svg'
                alt='illustration of a laptop'
            />
            <WhiteBg
                title='Free, open, simple'
                text='Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
            />
            <WhiteBg
                title='Powerful tooling'
                text='Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.'
            />
        </Flex>
    );
}

export default Section3;

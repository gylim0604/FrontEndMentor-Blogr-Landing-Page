import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import WhiteBg from './WhiteBg';

function Section1() {
    return (
        <Flex flexDir='column' px={5} textAlign='center'>
            {/* <Heading>Designed for the future</Heading> */}
            <WhiteBg title='Designed for the future' />
            <Image
                src='/illustration-editor-mobile.svg'
                alt='illustration of editor'
            />
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
    );
}

export default Section1;

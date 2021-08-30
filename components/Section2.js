import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

function Section2() {
    return (
        <Flex
            flexDir='column'
            px={5}
            textAlign='center'
            bg='url(/bg-pattern-circles.svg),linear-gradient(hsl(237, 17%, 21%), hsl(237, 23%, 32%))'
            bgPosition='top 1250% left 50%'
            bgRepeat='no-repeat'
            bgSize='160%'
            borderTopRightRadius='6rem'
            borderBottomLeftRadius='6rem'
            position='relative'
            mt='15rem'
            mb='5rem'
            pt='12.5rem'
            pb='10rem'
        >
            <Image
                position='absolute'
                src='/illustration-phones.svg'
                alt='illustration of mobile phone with blogr template'
                top='-12.5rem'
                left='50%'
                w='375px'
                transform='translateX(-50%)'
            />
            <Flex flexDir='column' textAlign='center' color='white'>
                <Heading>State of the Art Infrastructure</Heading>
                <Text>
                    With reliability and speed in mind, worldwide data centers
                    provide the backbone for ultra-fast connectivity. This
                    ensures your site will load instantly, no matter where your
                    readers are, keeping your site competitive.
                </Text>
            </Flex>
        </Flex>
    );
}

export default Section2;

import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

function Section2() {
    return (
        <Flex
            flexDir='column'
            px={[5, '10%']}
            textAlign='center'
            bg={{
                base: 'url(/bg-pattern-circles.svg),linear-gradient(hsl(237, 17%, 21%), hsl(237, 23%, 32%))',
                md: 'url(/bg-pattern-circles.svg),linear-gradient(to right,hsl(237, 17%, 21%), hsl(237, 23%, 32%))',
            }}
            bgPosition={{
                base: 'top 1250% left 50%',
                md: 'top 100% left -45%',
            }}
            bgRepeat={{ base: 'no-repeat', md: 'no-repeat' }}
            bgSize='160%'
            borderTopRightRadius='6rem'
            borderBottomLeftRadius='6rem'
            position='relative'
            mt={{ base: '15rem', md: '0' }}
            mb='5rem'
            pt={{ base: '12.5rem', md: '6rem' }}
            pb={{ base: '10rem', md: '6rem' }}
        >
            <Image
                position='absolute'
                src='/illustration-phones.svg'
                alt='illustration of mobile phone with blogr template'
                top={{ base: '-12.5rem', md: '-55px' }}
                left={{ base: '50%', md: '100px' }}
                h={{ base: 'auto', md: '550px' }}
                w={{ base: '375px', md: 'auto' }}
                transform={{ base: 'translateX(-50%)', md: 'unset' }}
            />
            <Flex
                flexDir='column'
                textAlign={{ base: 'center', md: 'left' }}
                color='white'
                // w={{ base: 'auto', md: '}
                ml={{ base: '0', md: '650px' }}
            >
                <Heading mb={{ base: '0', md: '2rem' }}>
                    State of the Art Infrastructure
                </Heading>
                <Text lineHeight={{ md: '2rem' }}>
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

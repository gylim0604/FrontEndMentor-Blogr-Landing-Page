import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react';
import React from 'react';
import WidthWrapper from './WidthWrapper';

function Section2() {
    return (
        <Flex
            bg={{
                base: 'url(/bg-pattern-circles.svg),linear-gradient(hsl(237, 17%, 21%), hsl(237, 23%, 32%))',
                md: 'url(/bg-pattern-circles.svg),linear-gradient(to right,hsl(237, 17%, 21%), hsl(237, 23%, 32%))',
            }}
            bgPosition={{
                base: 'top -15rem left 50%, center',
                md: 'bottom 20% left -45%',
            }}
            bgRepeat={{ base: 'no-repeat', md: 'no-repeat' }}
            bgSize={{ base: '160%', md: '70%, auto' }}
            borderTopRightRadius='6rem'
            borderBottomLeftRadius='6rem'
            mt={{ base: '30rem', md: '0' }}
            mb={{ base: '5rem', md: '8rem' }}
            pt={{ base: '12.5rem', md: '6rem' }}
            pb={{ base: '10rem', md: '6rem' }}
            w='100%'
            justifyContent='center'
            alignItems={{ md: 'center' }}
            h={{ base: '600px', md: '400px' }}
        >
            <Box
                maxW='1600px'
                w='100%'
                px={{ base: '8vw', md: '10rem' }}
                position='relative'
            >
                <Image
                    position='absolute'
                    src='/illustration-phones.svg'
                    alt='illustration of mobile phone with blogr template'
                    top={{ base: '-25rem', md: '-185px' }}
                    left={{ base: '50%', md: '120px' }}
                    h={{ base: 'auto', md: '570px' }}
                    w={{ base: '375px', md: 'auto' }}
                    transform={{ base: 'translateX(-50%)', md: 'unset' }}
                />
                <Flex
                    flexDir='column'
                    textAlign={{ base: 'center', md: 'left' }}
                    color='white'
                    ml={{ base: '0', md: '650px' }}
                >
                    <Heading mb={{ base: '1rem' }} fontSize='2.5rem'>
                        State of the Art Infrastructure
                    </Heading>
                    <Text lineHeight={{ base: '2rem' }}>
                        With reliability and speed in mind, worldwide data
                        centers provide the backbone for ultra-fast
                        connectivity. This ensures your site will load
                        instantly, no matter where your readers are, keeping
                        your site competitive.
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
}

export default Section2;

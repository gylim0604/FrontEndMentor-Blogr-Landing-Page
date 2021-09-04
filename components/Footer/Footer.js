import { Flex, Image, Box } from '@chakra-ui/react';
import React from 'react';
import FooterList from './FooterList';

function Footer() {
    return (
        <Box w='100%' bg='vvDarkBlue' mt='5rem' borderTopRightRadius='6rem'>
            <Flex
                flexDir={{ base: 'column', md: 'row' }}
                alignItems={{ base: 'center', md: 'start' }}
                py='4rem'
                maxW='1600px'
                w='100%'
                px={{ base: '8vw', md: '10rem' }}
                justifyContent='center'
                mx='auto'
            >
                <Image
                    src='/logo.svg'
                    mb='1.5rem'
                    alt='blogr logo'
                    mt={{ md: '1.5rem' }}
                />
                <Box
                    d={{ md: 'flex' }}
                    w={{ md: '100%' }}
                    justifyContent={{ md: 'space-around' }}
                >
                    <FooterList
                        title='Product'
                        list={[
                            'Overview',
                            'Pricing',
                            'Marketplace',
                            'Features',
                            'Integrations',
                        ]}
                    />
                    <FooterList
                        title='Company'
                        list={['About', 'Team', 'Blog', 'Careers']}
                    />
                    <FooterList
                        title='Connect'
                        list={['Contact', 'Newsletter', 'LinkedIn']}
                    />
                </Box>
            </Flex>
        </Box>
    );
}

export default Footer;

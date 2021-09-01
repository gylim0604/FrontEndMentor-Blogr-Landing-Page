import { Flex, Image, Box } from '@chakra-ui/react';
import React from 'react';
import FooterList from './FooterList';

function Footer() {
    return (
        <Flex
            bg='vvDarkBlue'
            flexDir={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'center', md: 'start' }}
            px={{ base: '8vw', md: '10%' }}
            py='4rem'
            borderTopRightRadius='6rem'
            mt='5rem'
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
    );
}

export default Footer;

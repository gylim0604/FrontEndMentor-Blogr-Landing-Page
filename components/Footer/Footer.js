import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import FooterList from './FooterList';

function Footer() {
    return (
        <Flex
            bg='vvDarkBlue'
            flexDir='column'
            alignItems='center'
            px={5}
            py='4rem'
            borderTopRightRadius='6rem'
        >
            <Image src='/logo.svg' mb='1.5rem' />
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
        </Flex>
    );
}

export default Footer;

import { Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';

function FooterList({ title, list }) {
    return (
        <Flex
            flexDir='column'
            textAlign={{ base: 'center', md: 'left' }}
            fontFamily='Ubuntu'
        >
            <Heading
                color='white'
                as='h3'
                size='sm'
                my='1.5rem'
                fontWeight='700'
            >
                {title}
            </Heading>
            <UnorderedList color='grayBlue' styleType='none' mx='0' mb='1rem'>
                {list.map((item, idx) => (
                    <ListItem
                        key={idx}
                        _hover={{
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                        my={{ base: '.5rem' }}
                        fontWeight='400'
                    >
                        {item}
                    </ListItem>
                ))}
            </UnorderedList>
        </Flex>
    );
}

export default FooterList;

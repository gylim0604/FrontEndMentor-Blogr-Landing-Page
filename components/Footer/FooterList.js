import { Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';

function FooterList({ title, list }) {
    return (
        <Flex flexDir='column' textAlign={{ base: 'center', md: 'left' }}>
            <Heading color='white' as='h3' size='sm' my='1.5rem'>
                {title}
            </Heading>
            <UnorderedList color='grayBlue' styleType='none' mx='0'>
                {list.map((item, idx) => (
                    <ListItem
                        key={idx}
                        _hover={{
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                    >
                        {item}
                    </ListItem>
                ))}
            </UnorderedList>
        </Flex>
    );
}

export default FooterList;

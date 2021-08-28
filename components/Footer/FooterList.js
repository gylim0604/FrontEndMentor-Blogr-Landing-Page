import { Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';

function FooterList({ title, list }) {
    return (
        <Flex flexDir='column' textAlign='center'>
            <Heading color='white' as='h3' size='sm' my='1.5rem'>
                {title}
            </Heading>
            <UnorderedList color='grayBlue' styleType='none' mx='0'>
                {list.map((item, idx) => (
                    <ListItem key={idx}>{item}</ListItem>
                ))}
            </UnorderedList>
        </Flex>
    );
}

export default FooterList;

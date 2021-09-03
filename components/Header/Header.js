import { Flex, Image, Box } from '@chakra-ui/react';
import Hero from './Hero';
import Nav from './Nav';
const Header = () => {
    return (
        <Flex
            // need change linear gradient for desktop view
            bg='url("/bg-pattern-intro.svg") ,linear-gradient(hsl(13, 100%, 72%), hsl(353, 100%, 62%));'
            bgPosition={{ base: 'top 35% left 30%', md: 'top 50% right 90%' }}
            bgRepeat='no-repeat'
            bgSize={{ base: '300%', md: '150%' }}
            color='white'
            pb='5rem'
            pt='2.5rem'
            borderBottomLeftRadius='6rem'
            w='100%'
            justifyContent='center'
        >
            <Box maxW='1519px' w='100%' px={{ base: '8vw', md: '10rem' }}>
                <Nav />
                <Hero />
            </Box>
        </Flex>
    );
};

export default Header;

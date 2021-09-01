import { Flex, Image } from '@chakra-ui/react';
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
            flexDir='column'
            color='white'
            pb='5rem'
            pt='2.5rem'
            px={{ base: '8vw', md: '10%' }}
            borderBottomLeftRadius='6rem'
        >
            <Nav />
            <Hero />
        </Flex>
    );
};

export default Header;

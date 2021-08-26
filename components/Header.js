import { Flex, Image } from '@chakra-ui/react';
import Hero from './Hero';
import Nav from './Nav';
const Header = () => {
    return (
        <Flex
            // bgImage='/bg-pattern-intro.svg'
            bg='url("/bg-pattern-intro.svg") ,linear-gradient(hsl(13, 100%, 72%), hsl(353, 100%, 62%));'
            bgPosition='top 35% left 30%'
            bgRepeat='no-repeat'
            bgSize='300%'
            flexDir='column'
            color='white'
            pb='5rem'
            pt='2.5rem'
            px={5}
            borderBottomLeftRadius='6rem'
        >
            <Nav />
            <Hero />
        </Flex>
    );
};

export default Header;

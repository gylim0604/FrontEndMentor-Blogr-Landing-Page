import { Box, Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import WidthWrapper from '../components/WidthWrapper';

export default function Home() {
    return (
        <Flex alignItems='center' flexDir='column'>
            <Head>
                <title>Blogr Landing page</title>
                <meta
                    name='description'
                    content='Blogr landing page demo from FrontEnd Mentor'
                />
            </Head>
            <Header />
            <WidthWrapper>
                <Section1 />
            </WidthWrapper>
            <Section2 />
            <WidthWrapper>
                <Section3 />
            </WidthWrapper>

            <Footer />
        </Flex>
    );
}

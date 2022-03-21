import { Box, Container, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Header from '../src/components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box p={4}>
        <Heading>Filmes</Heading>
      </Box>
    </>
  );
};

export default Home;

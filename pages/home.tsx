import { Box, Container, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Banner from '../src/components/Banner';
import Header from '../src/components/Header';
import Row from '../src/components/Row';
import requests from '../src/lib/requests';

const Home: NextPage = () => {
  return (
    <body className="bg-black h-screen">
      <Header />

      <Banner />

      <Row
        title={'Originais Netflix'}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title={'Em alta'} fetchUrl={requests.fetchTrending} />

      <Row
        title={'Bem avaliados'}
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />

      <Row title={'Ação'} fetchUrl={requests.fetchActionMovies} isLargeRow />

      <Row title={'Comédia'} fetchUrl={requests.fetchComedyMovies} isLargeRow />

      <Row
        title={'Romance'}
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />

      <Row title={'Terror'} fetchUrl={requests.fetchHorrorMovies} isLargeRow />

      <Row
        title={'Documentários'}
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </body>
  );
};

export default Home;

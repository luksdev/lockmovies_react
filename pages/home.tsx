import { Box, Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import Row from "../src/components/Row";
import { AuthContext } from "../src/contexts/AuthContext";
import requests from "../src/lib/requests";

const Home: NextPage = () => {
  const { user } = useContext<any>(AuthContext);
  return (
    <Box bgColor={"black"} height="full" className="bg-black h-screen">
      <Head>
        <title>Home</title>
      </Head>
      <Header />

      <Banner />

      <Row
        title={"Originais Netflix"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title={"Em alta"} fetchUrl={requests.fetchTrending} />

      <Row
        title={"Bem avaliados"}
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />

      <Row
        title={"Favoritos"}
        isLargeRow
      />

      <Row title={"Ação"} fetchUrl={requests.fetchActionMovies} isLargeRow />

      <Row title={"Comédia"} fetchUrl={requests.fetchComedyMovies} isLargeRow />

      <Row
        title={"Romance"}
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />

      <Row title={"Terror"} fetchUrl={requests.fetchHorrorMovies} isLargeRow />

      <Row
        title={"Documentários"}
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </Box>
  );
};

export default Home;

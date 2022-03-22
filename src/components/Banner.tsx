import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';
import axios from 'axios';
import { relative } from 'path';
import { useEffect, useState } from 'react';
import instance from '../lib/axios';
import requests from '../lib/requests';
import Header from './Header';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className="h-[540px] relative z-0 object-contain text-white"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <Box className="ml-[30px] pt-[140px] h-[190px]" position={'absolute'}>
        <Text fontWeight={'bold'} fontSize="5xl" pb={5}>
          {movie?.title || movie?.name || movie?.original_name}
        </Text>
        <Box>
          <ButtonGroup>
            <Button>Assistir</Button>
            <Button>Favoritar</Button>
          </ButtonGroup>
        </Box>
        <Text
          maxW={'600px'}
          pt={5}
          textOverflow={'ellipsis'}
          overflowWrap="break-word"
          wordBreak="break-word"
        >
          {movie?.overview}
        </Text>
      </Box>
      <Box
        className="bg-gradient-to-l from-transparent -z-3 to-black h-[33.8rem]"
        // position="absolute"
        // float="left"
        // top="120px"
        // left="%"
        // style={{ transform: 'translate(2%)' }}
      ></Box>
      <Box className="bg-gradient-to-b relative -top-[195px] from-transparent to-black h-[12.4rem]"></Box>
    </header>
  );
}

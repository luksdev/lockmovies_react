import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import instance from "../lib/axios";
import requests from "../lib/requests";

export default function Banner() {
  const [movie, setMovie] = useState<any>([]);

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
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-[30px] pt-[140px] h-[190px] absolute">
        <Text fontWeight={"bold"} fontSize={{ base: "2xl", md: "5xl" }} pb={5}>
          {movie?.title || movie?.name || movie?.original_name}
        </Text>
        <div>
          <ButtonGroup>
            <Button>Assistir</Button>
            <Button>Favoritar</Button>
          </ButtonGroup>
        </div>
        <Text
          noOfLines={5}
          w={350}
          pt={5}
          pr={2}
          textOverflow={"ellipsis"}
          overflowWrap="break-word"
          wordBreak="break-word"
        >
          {movie?.overview}
        </Text>
      </div>
      <div className="bg-gradient-to-l from-transparent -z-3 to-black h-[33.8rem]"></div>
      <div className="bg-gradient-to-b relative -top-[195px] from-transparent to-black h-[12.4rem]"></div>
    </header>
  );
}

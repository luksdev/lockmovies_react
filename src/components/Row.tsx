import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import instance from "../lib/axios";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

export default function Row({
  title,
  fetchUrl,
  isLargeRow = false,
  favoritesFetch,
}: any) {
  const [movies, setMovies] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);

  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const fetchFavoriteData = () => {
      axios
        .get(
          `https://9947ccq2oj.execute-api.us-east-1.amazonaws.com/favorites/${user.userId}`
        )
        .then((res) => {
          setFavorites(res.data.favorite);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchFavoriteData();
    fetchData();
  }, []);

  return (
    <div className="p-5" id={title === "Favoritos" ? "Favorites" : "Session"} style={{scrollMargin: 50}}>
      <h1 className="text-2xl md:text-4xl font-bold md:mb-5">{title}</h1>

      <div className="flex space-x-5 py-4 overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {/* Map with two arrays */}
        {movies?.map((movie, index) => {
          return (
            <div
              key={index}
              className={`${
                isLargeRow
                  ? "flex-none h-auto py-3"
                  : "flex-none group w-80 h-48 hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20"
              }`}
            >
              {movie?.poster_path != null ? (
                <>
                  <Image
                    alt={movie?.name ? movie?.name : movie?.title}
                    loading="lazy"
                    width={isLargeRow ? 200 : 3000}
                    height={isLargeRow ? 300 : 1950}
                    className={
                      isLargeRow
                        ? "h-48 md:w-48 md:h-72 object-contain cursor-pointer hover:scale-110 transition transform duration-150 ease-out rounded-lg"
                        : "absolute w-full h-full rounded-md hover:brightness-50 z-0 object-cover"
                    }
                    layout={isLargeRow ? "fixed" : "responsive"}
                    src={`https://image.tmdb.org/t/p/original${
                      isLargeRow ? movie?.poster_path : movie?.backdrop_path
                    }`}
                  />
                </>
              ) : undefined}
              <h2
                className={`${
                  isLargeRow
                    ? "hidden"
                    : "z-50 absolute bottom-5 text-center w-full text-white text-lg font-medium hidden group-hover:block cursor-pointer px-3"
                }`}
              >
                {movie?.title || movie?.name || movie?.original_name}
              </h2>
            </div>
          );
        })}
        {favorites?.map((movie, index) => {
          return (
            <div
              key={index}
              className={`${
                isLargeRow
                  ? "flex-none h-auto py-3"
                  : "flex-none group w-80 h-48 hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20"
              }`}
            >
              {movie?.poster_path != null ? (
                <>
                  <Image
                    alt={movie?.name ? movie?.name : movie?.title}
                    loading="lazy"
                    width={isLargeRow ? 200 : 3000}
                    height={isLargeRow ? 300 : 1950}
                    className={
                      isLargeRow
                        ? "h-48 md:w-48 md:h-72 object-contain cursor-pointer hover:scale-110 transition transform duration-150 ease-out rounded-lg"
                        : "absolute w-full h-full rounded-md hover:brightness-50 z-0 object-cover"
                    }
                    layout={isLargeRow ? "fixed" : "responsive"}
                    src={`https://image.tmdb.org/t/p/original${
                      isLargeRow ? movie?.poster_path : movie?.backdrop_path
                    }`}
                  />
                </>
              ) : undefined}
              <h2
                className={`${
                  isLargeRow
                    ? "hidden"
                    : "z-50 absolute bottom-5 text-center w-full text-white text-lg font-medium hidden group-hover:block cursor-pointer px-3"
                }`}
              >
                {movie?.title || movie?.name || movie?.original_name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

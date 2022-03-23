import { type } from 'os';
import { useEffect, useState } from 'react';
import instance from '../lib/axios';

export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="p-5">
      <h1 className="text-2xl md:text-4xl font-bold md:mb-5">{title}</h1>
      <div className="flex space-x-5 py-4 overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className={`${
                isLargeRow
                  ? 'flex-none h-auto py-3'
                  : 'flex-none group w-80 h-48 hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20'
              }`}
            >
              {movie?.poster_path != null ? (
                <img
                  loading="lazy"
                  className={
                    isLargeRow
                      ? 'h-48 md:w-48 md:h-72 object-contain cursor-pointer hover:scale-110 transition transform duration-150 ease-out rounded-lg'
                      : 'absolute w-full h-full rounded-md hover:brightness-50 z-0 object-cover'
                  }
                  src={`https://image.tmdb.org/t/p/original${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie?.name}
                />
              ) : undefined}
              <h2
                className={`${
                  isLargeRow
                    ? 'hidden'
                    : 'z-50 absolute bottom-5 text-center w-full text-white text-lg font-medium hidden group-hover:block cursor-pointer px-3'
                }`}
              >
                {movie?.title || movie.name || movie.original_name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

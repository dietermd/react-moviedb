import { useEffect, useState } from "react";
import { Movie } from "../models/movie";
import { FetchMovieList, MovieListTypes } from "../utils/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import MovieCard from "./movieCard";

import 'swiper/css';
import 'swiper/css/pagination';

interface BodyMoviesSlideProps {
  Title: string
  FetchFunction: (type: MovieListTypes) => Promise<Movie[]>
}

export default function BodyMoviesSlide(props: BodyMoviesSlideProps) {

  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    FetchMovieList(MovieListTypes.NowPlaying)
      .then(movies => setMovies(movies))
  }, [])

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="text-white font-bold text-2xl">{props.Title}</div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{dynamicBullets: true}}
          modules={[Pagination]}
          className="w-full h-[350px]"
        >
          {
            movies.map((movie, i) =>
              <SwiperSlide key={i} className="w-auto inline-block">
                <MovieCard 
                  title={movie.title}
                  release_date={movie.release_date}
                  poster_path={movie.poster_path}
                />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </>
  )
}
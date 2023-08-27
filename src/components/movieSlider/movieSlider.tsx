import { useEffect, useState } from "react";
import { Movie } from "../../models/movie";
import { FetchMovieList, MovieListTypes } from "../../utils/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import MovieCard from "../movieCard";
import MovieCardLoading from "./movieCardLoading";

import 'swiper/css';
import 'swiper/css/pagination';

interface BodyMoviesSlideProps {
  Title: string
  MovieListType: MovieListTypes
}

export default function BodyMoviesSlide(props: BodyMoviesSlideProps) {

  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    FetchMovieList(props.MovieListType)
      .then(movies => setMovies(movies))
  }, [])

  const slides = movies.length > 0 ?
    movies.map((movie, i) =>
      <SwiperSlide key={i} className="w-auto inline-block">
        <MovieCard 
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
        />
      </SwiperSlide>
    )
    :
    Array(15).fill(undefined).map((_, i) => 
      <SwiperSlide key={i} className="w-auto inline-block">
        <MovieCardLoading />
      </SwiperSlide>
    )

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="text-white font-bold text-2xl">{props.Title}</div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          freeMode={true}
          pagination={{dynamicBullets: true}}
          modules={[Pagination, FreeMode]}
          className="w-full h-[350px]"
        >
          {
            slides
          }
        </Swiper>
      </div>
    </>
  )
}
import { Movie } from "../../models/movie";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import MovieCard from "./movieCard";

import 'swiper/css';
import 'swiper/css/pagination';

export default function MovieSlider(props: { movies: Movie[]}) {

  const slides = props.movies.map((movie, i) =>
    <SwiperSlide key={i} className="w-auto inline-block">
      <MovieCard 
        movie_id={movie.id}
        title={movie.title}
        release_date={movie.release_date}
        poster_path={movie.poster_path}
        vote_average={movie.vote_average}
      />
    </SwiperSlide>
  )

  return (
    <>
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
    </>
  )
}
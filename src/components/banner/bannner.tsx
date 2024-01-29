import { Movie } from "../../models/movie"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';
import MovieInfo from "./movieInfo"
import MovieImageCover from "./movieImageCover"
import { Pagination } from "swiper/modules";

export default function Banner(props: {movies: Movie[]}) {

  const slides = props.movies.map((movie, i) =>
      <SwiperSlide key={i}>              
        <MovieInfo movie={movie} index={i} />
        <MovieImageCover backdrop_path={movie.backdrop_path} />
      </SwiperSlide>
  )  

  return (
    <Swiper pagination={true} modules={[Pagination]} className="banner-swiper h-[600px] w-full rounded-b-lg">
      { slides }
    </Swiper>
  )
}

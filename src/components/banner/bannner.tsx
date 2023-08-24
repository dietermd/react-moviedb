import { useEffect, useState } from "react"
import { Movie } from "../../models/movie"
import { GetImageUrl, Genres, GetFormatedDate, FetchMovieList, MovieListTypes, ImageSizes } from "../../utils/utils"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/pagination';
import MovieInfo from "./movieInfo"
import MovieInfoLoading from "./movieInfoLoading"
import MovieImageCover from "./movieImageCover"

export default function Banner() {
  const [movies, setMovies] = useState<Movie[]>([])  

  useEffect(() => {
    FetchMovieList(MovieListTypes.Popular)
      .then(movies => setMovies(movies))
  }, [])

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="banner-swiper h-[600px] w-full rounded-b-lg">
        {
          movies.length === 0 ?
          <SwiperSlide>
            <MovieInfoLoading />
          </SwiperSlide>          
          :
          movies.map((movie, i) =>
            <SwiperSlide key={i}>              
              <MovieInfo movie={movie} index={i} />
              <MovieImageCover backdrop_path={movie.backdrop_path} />             
            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  )
}

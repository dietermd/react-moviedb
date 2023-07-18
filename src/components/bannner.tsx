import { useEffect, useState } from "react"
import { Movie } from "../models/movie"
import { FetchUpcomingMovies, GetImageUrl } from "../utils/utils"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner() {
  const [movies, setMovies] = useState<Movie[]>([])  

  useEffect(() => {
    FetchUpcomingMovies()
    .then(movies => setMovies(movies))
  }, [])


  return (
    movies.length === 0 ?
    <div className="h-[600px] w-full flex justify-center items-center">
      <h1>Fetching upcoming movies...</h1>
    </div>        
    :
    RenderMovieCarousel(movies) 
  )
}

function RenderMovieCarousel(movies: Movie[]) {  
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} 
        className="h-[600px] w-full">
        {
          movies.map((movie, i) =>
            <SwiperSlide key={i}>
              <img src={GetImageUrl(movie.backdrop_path)} className="absolute brightness-50" alt="..." />
              <div className="absolute mt-[80px] h-[400px] w-1/2 flex flex-col gap-8 justify-center items-start px-32">
                <span className="font-bold text-5xl text-white">{movie.title}</span>
                <span className="text-white overflow-hidden">{movie.overview}</span>
              </div>
            </SwiperSlide>)
        }

      </Swiper>
    </>
  )
}

import { useEffect, useState } from "react"
import { Movie } from "../models/movie"
import { FetchUpcomingMovies, GetImageUrl, Genres } from "../utils/utils"
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
    RenderLoading()
    :
    RenderMovieCarousel(movies) 
  )
}

function RenderLoading() {
  return (
    <div className="relative animate-pulse h-[600px] w-full bg-slate-300 rounded-b-lg"></div>
  )
}

function RenderMovieCarousel(movies: Movie[]) {  
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]}
        className="banner-swiper h-[600px] w-full rounded-b-lg">
        {
          movies.map((movie, i) =>
            <SwiperSlide key={i}>
              <img src={GetImageUrl(movie.backdrop_path)} className="absolute h-[600px] w-full brightness-50" alt="..." />
              <div className="absolute h-full w-1/2 flex flex-col gap-8 justify-center px-32">
                <div className="font-bold text-4xl text-white">{movie.title}</div>
                <div className="text-white">{movie.overview}</div>
                <div className="flex gap-2">
                  {
                    movie.genre_ids.map(genreId => 
                      <div className="text-white bg-gray-300/50 rounded-lg px-2">
                        {Genres.get(genreId)}
                      </div>
                    )
                  }
                </div>                
              </div>
            </SwiperSlide>)
        }

      </Swiper>
    </>
  )
}

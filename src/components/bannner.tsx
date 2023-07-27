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
              <div className="absolute h-full w-1/2 flex flex-col gap-4 justify-center px-4 z-10">
                <div className="font-bold text-lg text-red-500">{`#${i + 1} Upcoming`}</div>
                <div className="font-bold text-4xl text-white">{movie.title}</div>
                <div className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                  <div className="text-white">{new Date(movie.release_date).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"})}</div>
                </div>
                <div className="text-white">{movie.overview}</div>
                <div className="flex gap-2">
                  {
                    movie.genre_ids.map(genreId => 
                      <div className="text-white border-2 border-white rounded-lg px-2">
                        {Genres.get(genreId)}
                      </div>
                    )
                  }
                </div>
                <div>
                  <button className="rounded-full bg-red-500 text-white font-bold py-2 px-4 flex items-center gap-1 ">
                    Detail
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                  </button>
                </div>
              </div>

              <div className="banner-image-cover relative h-full w-3/4 float-right">
                <div className="banner-inner-image-cover h-full w-full">
                  <img src={GetImageUrl(movie.backdrop_path)} className="absolute h-full w-full object-cover mix-blend-overlay" alt="..." />
                </div>
                
              </div>              
            </SwiperSlide>)
        }
      </Swiper>
    </>
  )
}

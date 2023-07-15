import { useEffect, useState } from "react"
import { Movie } from "../models/movie"
import { FetchUpcomingMovies, GetImageUrl } from "../utils/utils"
import { Carousel, initTE } from "tw-elements"

export default function Banner() {

  const [movies, setMovies] = useState<Movie[]>([])  

  useEffect(() => {
    FetchUpcomingMovies()
    .then(movies => setMovies(movies))
  }, [])

  useEffect(() => {
    if (movies.length > 0)
      initTE({ Carousel })
  }, [movies])

  return (    
    movies.length === 0 ?
    <div className="h-[600px] w-full flex justify-center items-center">
      <h1>Fetching upcoming movies...</h1>
    </div>        
    :
    BuildMovieCarousel(movies)    
  )
}

function BuildMovieCarousel(movies: Movie[]): JSX.Element {
  return (
    <>
      <div id="movieCarousel" className="relative flex justify-center" data-te-carousel-init data-te-carousel-slide>
        <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
          {
            movies.map((_, i) =>
            i === 0 ?
              <button
                key={i}
                type="button"
                data-te-target="#movieCarousel"
                data-te-slide-to={i}
                data-te-carousel-active
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label={`Slide ${i}`}>
              </button>
              :
              <button
                key={i}
                type="button"
                data-te-target="#movieCarousel"
                data-te-slide-to={i}
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label={`Slide ${i}`}>
              </button>
            )
          }
        </div>
        
        <div className="relative h-[600px] w-full overflow-hidden after:clear-both after:block after:content-['']">
          {
            movies.map((movie, i) =>
              i === 0 ?
                <div key={i} className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-active data-te-carousel-item
                  style={{backfaceVisibility: "hidden"}}>
                  <img src={GetImageUrl(movie.backdrop_path)} className="absolute h-[600px] w-full brightness-50" alt="..." />
                  <div className="mt-[80px] absolute h-[400px] w-1/2 flex flex-col gap-8 justify-center items-start px-32">
                    <span className="font-bold text-5xl text-white">{movie.title}</span>
                    <span className="text-white overflow-hidden">{movie.overview}</span>
                  </div>
                </div>
                :
                <div key={i} className="relative float-left -mr-[100%] hidden  w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  style={{backfaceVisibility: "hidden"}}>
                  <img src={GetImageUrl(movie.backdrop_path)} className="absolute h-[600px] w-full brightness-50" alt="..." />
                  <div className="mt-[80px] absolute h-[400px] w-1/2 flex flex-col gap-8 justify-center items-start px-32">
                    <span className="font-bold text-5xl text-white">{movie.title}</span>
                    <span className="text-white overflow-hidden">{movie.overview}</span>
                  </div>
                </div>
            )
          }
        </div>
      </div>
    </>
  )
}
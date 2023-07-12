import { useEffect, useState } from "react"
import { Movie } from "../models/movie"
import { FetchUpcomingMovies, GetImageUrl } from "../utils/utils"
import { Carousel, initTE } from "tw-elements"

export default function Header() {

  const [movies, setMovies] = useState<Movie[]>([])  

  useEffect(() => {
    FetchUpcomingMovies()
    .then(movies => setMovies(movies))
  }, [])

  useEffect(() => {
    if (movies.length >0)
      initTE({ Carousel })
  }, [movies])

  return (
    <>
      <header className="absolute w-full z-10">
        <nav className="h-[80px] flex items-center px-6 bg-gradient-to-b from-black">          
          <div className="basis-1/12 h-full flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="red" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
            </svg>
            <span className="font-bold text-white">MovieDB</span>
          </div>

          <div className="basis-10/12 h-full flex justify-center items-center">
            <input type="text" className="w-1/2 h-1/2 bg-transparent border-2 border-white rounded-lg outline-none text-center text-white placeholder:text-white" placeholder="Search movie..."/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" 
              className="pointer-events-none w-5 h-5 -translate-x-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>

          <div className="basis-1/12 h-full flex items-center justify-end">
            <a href="https://github.com/dietermd/react-moviedb" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="red"  viewBox="0 0 24 24" strokeWidth={2} stroke="none" className="w-6 h-6">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </nav>
      </header>

      {
        movies.length === 0 ?
        <div className="h-[600px] w-full flex justify-center items-center">
          <h1>Fetching upcoming movies...</h1>
        </div>        
        :
        BuildMovieCarousel(movies)
      }
    </>
    
       
  )
}

function BuildMovieCarousel(movies: Movie[]): JSX.Element {
  return (
    <>
      <div id="movieCarousel" className="relative" data-te-carousel-init data-te-carousel-slide>
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
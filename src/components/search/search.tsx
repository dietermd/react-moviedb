import { useEffect, useState } from "react"
import { SearchMovies } from "../../utils/utils"
import { Movie } from "../../models/movie"
import SearchModal from "./searchModal"

export default function Search() {

  const [search, setSearch] = useState<string>('')
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {    
    const timeoutId = setTimeout(() => {
      if (search !== '') {
        SearchMovies(search).then(movies => setMovies(movies))
      }
      else {
        setMovies([])
      }
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [search])

  return (
    <>
      <div className="relative basis-8/12 h-full hidden md:flex justify-center items-center">
        <input type="text" 
          className="absolute w-5/6 lg:w-2/3 xl:w-3/5 h-1/2 bg-transparent border-2 border-white rounded-lg outline-none text-center text-white placeholder:text-white/50"
          placeholder="Search movie..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="w-5/6 lg:w-2/3 xl:w-3/5 md:flex justify-end pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" 
            className="pointer-events-none w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>          
      </div>

      <div className="basis-8/12 h-full md:hidden flex justify-end items-center cursor-pointer">
        <div className="flex justify-center items-center w-[42px] h-1/2 bg-transparent border-2 border-white rounded-lg outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" 
            className="pointer-events-none w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>          
      </div>

      { movies.length > 0 && <SearchModal movies={movies} /> }
    </>
  )
}
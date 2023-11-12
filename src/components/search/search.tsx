import { useEffect, useRef, useState } from "react"
import { SearchMovies } from "../../utils/utils"
import { Movie } from "../../models/movie"
import SearchModal from "./searchModal"

export default function Search() {

  const [search, setSearch] = useState<string>('')
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    if (search !== '') {      
      const timeoutId = setTimeout(() => {
        SearchMovies(search).then(movies => setMovies(movies))
      }, 1000)
  
      return () => clearTimeout(timeoutId)
    }

    setMovies([])
        
  }, [search])

  const searchInputFieldRef = useRef<HTMLInputElement>(null)

  const hasMovies = movies.length > 0

  function handleClick() {
    const widthMd = 768
    if (window.innerWidth >= widthMd) {
      resetSearch()
      return
    }
    
    resetSearchSmall()
  }

  function resetSearch() {
    setSearch('')
    searchInputFieldRef.current!.value = ''
  }

  function resetSearchSmall() {
    if (hasMovies) {  
      resetSearch()
      return
    }

    const searchValue = prompt("Search movie:")
    if (searchValue) {
      searchInputFieldRef.current!.value = searchValue
      setSearch(searchValue)
    }
  }

  return (
    <>
      <div className="basis-8/12 h-full hidden md:flex justify-center items-center">
        <div className="w-5/6 lg:w-2/3 xl:w-3/5 h-1/2 flex justify-end items-center">
          <input type="text" 
            className="w-full h-full bg-transparent border-2 border-white rounded-lg outline-none text-center text-white placeholder:text-white/50"
            placeholder="Search movie..."
            onChange={(event) => setSearch(event.target.value)}
            ref={searchInputFieldRef}
          />
          <div className="absolute mr-2" onClick={handleClick}>
            <SearchSVG hasMovies={hasMovies} />
          </div>
        </div>
      </div>

      <div className="basis-8/12 h-full md:hidden flex justify-end items-center cursor-pointer order-last" onClick={handleClick}>
        <div className="flex justify-center items-center w-[42px] h-1/2 bg-transparent border-2 border-white rounded-lg outline-none">
          <SearchSVG hasMovies={hasMovies} />
        </div>          
      </div>

      { hasMovies && <SearchModal movies={movies} /> }
    </>
  )
}

function SearchSVG(props: { hasMovies: boolean }) {
  const { hasMovies } = props
  let className = "pointer-events-none w-5 h-5"
  let d = "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  if (hasMovies) {
    className = "cursor-pointer w-5 h-5"
    d = "M6 18L18 6M6 6l12 12"
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )
}
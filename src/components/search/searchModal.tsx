import { useNavigate } from "react-router-dom"
import { Movie } from "../../models/movie"
import SearchModalMovieCard from "./searchModalMovieCard"

type SearchModalProps = {
  movies: Movie[]
  resetSearch: Function
}

export default function SearchModal(props: SearchModalProps) {
  const navigate = useNavigate();

  function navigateToMoviePage(movieId: number) {
    props.resetSearch()
    navigate(`movie/${movieId}`)
  }

  return (
    <>
      <div className="absolute inset-x-0 top-[70px] px-6 flex justify-center">
        <div className="md:basis-8/12 flex justify-center">
          <div className="flex flex-col md:w-5/6 lg:w-2/3 xl:w-3/5 max-h-[70vh] overflow-auto bg-white rounded-lg">
            {
              props.movies.map((movie, i) =>
                <div key={i} className="group flex gap-2 h-[158px] p-1 cursor-pointer" onClick={() => navigateToMoviePage(movie.id)}>
                  <SearchModalMovieCard movie={movie} />
                </div>                
              )
            }
          </div>          
        </div>        
      </div>
    </>
  )
}


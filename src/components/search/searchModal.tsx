import { Movie } from "../../models/movie"
import SearchModalMovieCard from "./searchModalMovieCard"

type SearchModalProps = {
  movies: Movie[]
}

export default function SearchModal(props: SearchModalProps) {
  return (
    <>
      <div className="absolute inset-x-0 top-[70px] px-6 flex justify-center">
        <div className="basis-8/12 flex justify-center">
          <div className="flex flex-col w-3/4 lg:w-2/3 xl:w-3/5 max-h-[70vh] overflow-auto bg-white rounded-lg">
            {
              props.movies.map((movie, i) => <SearchModalMovieCard movie={movie} key={i} />)
            }
          </div>          
        </div>        
      </div>
    </>
  )
}
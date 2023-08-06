import Banner from "./components/bannner"
import BodyMoviesSlide from "./components/bodyMoviesSlide"
import Header from "./components/header"
import { FetchMovieList, MovieListTypes } from "./utils/utils"

function App() {
  return (
    <>
      <div className="bg-[#242428]">
        <Header />
        <Banner />

        <div className="flex flex-col mt-3 px-4">
          <BodyMoviesSlide
            Title="Now Playing"
            FetchFunction={() => FetchMovieList(MovieListTypes.NowPlaying)}
          />
        </div>

        
      </div>
    </>
  )
}

export default App

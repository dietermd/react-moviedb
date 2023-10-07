import Banner from "./components/banner/bannner"
import MovieSlide from "./components/movieSlider/movieSlide"
import Header from "./components/header"
import { MovieListTypes } from "./utils/utils"

function App() {
  return (
    <>
      <div className="bg-[#242428]">
        <Header />
        <Banner />

        <div className="flex flex-col mt-3 px-4 gap-5">
          <MovieSlide
            Title="Now Playing"
            MovieListType={MovieListTypes.NowPlaying}
          />

          <MovieSlide
            Title="Top Rated"
            MovieListType={MovieListTypes.TopRated}
          />
        </div>

        
      </div>
    </>
  )
}

export default App

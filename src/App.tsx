import Banner from "./components/banner/bannner"
import Header from "./components/header"
import { Await, Outlet, defer, useLoaderData } from "react-router-dom"
import { FetchMovieListPromise, MovieListTypes } from "./utils/utils"
import { Suspense } from "react"
import BannerLoading from "./components/banner/bannerLoading"
import { Movie } from "./models/movie"
import MovieSlider from "./components/movieSlider/movieSlider"
import MovieSliderLoading from "./components/movieSlider/movieSliderLoading"

export default function App() {
  return (
    <>
      <div className="bg-[#242428]">
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export async function RootContentLoader() {
  const popularMovieListPromise = FetchMovieListPromise(MovieListTypes.Popular)
  const nowPlayingMovieListPromise = FetchMovieListPromise(MovieListTypes.NowPlaying)
  const topRatedMovieListPromise = FetchMovieListPromise(MovieListTypes.TopRated)
  return defer({
    popularMovieList: popularMovieListPromise,
    nowPlayingMovieList : nowPlayingMovieListPromise,
    topRatedMovieList : topRatedMovieListPromise
  })
}

export function RootContent() {
  const data = useLoaderData() as { popularMovieList: Promise<Movie[]>, nowPlayingMovieList: Promise<Movie[]>, topRatedMovieList: Promise<Movie[]> };

  return (
    <>
      <Suspense fallback={<BannerLoading />}>
        <Await resolve={data.popularMovieList}>
          {
            (popularMovieList: Movie[]) => <Banner movies={popularMovieList}/>
          }
        </Await>
      </Suspense>


      <div className="flex flex-col mt-3 px-4 gap-5">
        <div className="flex flex-col gap-4">
          <div className="text-white font-bold text-2xl">Now Playing</div>
          <Suspense fallback={<MovieSliderLoading />}>
            <Await resolve={data.nowPlayingMovieList}>
              {
                (nowPlayingMovieList: Movie[]) => <MovieSlider movies={nowPlayingMovieList}/>
              }
            </Await>
          </Suspense>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-white font-bold text-2xl">Top Rated</div>
          <Suspense fallback={<MovieSliderLoading />}>
            <Await resolve={data.topRatedMovieList}>
              {
                (topRatedMovieList: Movie[]) => <MovieSlider movies={topRatedMovieList}/>
              }
            </Await>
          </Suspense>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-white font-bold text-2xl">Popular People</div>
          
        </div>
      </div> 
    </>
  )
}
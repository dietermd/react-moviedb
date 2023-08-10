import { useEffect, useState } from "react"
import { Movie } from "../models/movie"
import { GetImageUrl, Genres, GetFormatedDate, FetchMovieList, MovieListTypes, ImageSizes } from "../utils/utils"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner() {
  const [movies, setMovies] = useState<Movie[]>([])  

  useEffect(() => {
    FetchMovieList(MovieListTypes.Popular)
      .then(movies => setMovies(movies))
  }, [])

  // useEffect(() =>
  //   setMovies([
  //     {
  //       "adult": false,
  //       "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
  //       "genre_ids": [
  //         28,
  //         12,
  //         878
  //       ],
  //       "id": 667538,
  //       "original_language": "en",
  //       "original_title": "Transformers: Rise of the Beasts",
  //       "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
  //       "popularity": 4835.711,
  //       "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
  //       "release_date": "2023-06-06",
  //       "title": "Transformers: Rise of the Beasts",
  //       "video": false,
  //       "vote_average": 7.5,
  //       "vote_count": 1940
  //     }
  //   ])
  // ,[])

  


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
              <div className="absolute h-full w-full md:w-1/2 flex flex-col gap-4 justify-center px-4 z-10 text-white">
                <div className="font-bold text-lg text-red-500">{`#${i + 1} Popular`}</div>
                <div className="font-bold text-4xl">{movie.title}</div>
                <div className="hidden md:flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                  <div>{GetFormatedDate(movie.release_date)}</div>
                </div>
                <div className="hidden md:flex">{movie.overview}</div>
                <div className="hidden md:flex gap-2">
                  {
                    movie.genre_ids.map((genreId, i) => 
                      <div key={i} className="border-2 border-white rounded-lg px-2">
                        {Genres.get(genreId)}
                      </div>
                    )
                  }
                </div>
                <div>
                  <button className="rounded-full bg-red-500 font-bold py-2 px-4 flex items-center gap-1 ">
                    Detail
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                  </button>
                </div>
              </div>

              <div className="banner-image-cover relative h-full w-full md:w-3/4 float-right">
                <div className="banner-inner-image-cover h-full w-full">
                  <img src={GetImageUrl(movie.backdrop_path, ImageSizes.Original)} className="absolute h-full w-full object-cover mix-blend-overlay" alt="..." />
                </div>
                
              </div>              
            </SwiperSlide>)
        }
      </Swiper>
    </>
  )
}

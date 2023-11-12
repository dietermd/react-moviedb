import { Await, defer, useAsyncValue, useLoaderData } from "react-router-dom";
import { GetFormatedDate, GetImageUrl, ImageSizes } from "../../utils/utils";
import { MovieDetails } from "../../models/movieDetails";
import MovieScore from "../../components/movieSlider/movieScore";
import { Suspense } from "react";
import GenreBadges from "../../components/banner/genreBadges";
import { API_KEY } from "../../utils/apiKey";

export async function MoviePageLoader({ params }: any) {
  const movieId = params.movieId as string
  const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}`)
  url.searchParams.append("api_key", API_KEY)
  const movieDetailsPromise = fetch(url).then(res => res.json())
  return defer({movieDetails: movieDetailsPromise})
}

function GetFormatedRuntime(runtime: number){
  const hours = Math.floor(runtime / 60)
  const min = runtime % 60
  return `${hours}h ${min}m`
}


export default function MoviePage() {
  const data = useLoaderData() as { movieDetails: Promise<MovieDetails> };

  return (
    <>
      <Suspense fallback={MovieDetailsLoading()}>
        <Await resolve={data.movieDetails}>
          <MovieDetailsBanner />
        </Await>
      </Suspense>
    </>
  )  
}

function MovieDetailsLoading() {
  return (
    <>
      <div className="relative h-[600px] w-full rounded-b-lg">
        <div className="absolute w-full h-full flex items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center">
            <div className="w-[250px] h-[400px] rounded-lg bg-slate-300 animate-pulse">
            </div>
          </div>
          
          <div className="w-2/3 hidden md:flex flex-col gap-4 animate-pulse">
            <MovieInfoLoading />
          </div>          
        </div>
      </div>

      <div className="md:hidden mt-4 flex flex-col gap-4 pl-2 animate-pulse">
        <MovieInfoLoading />
      </div>
      
    </>
  )
}

function MovieInfoLoading() {
  return (
    <>
      <div className="h-6 bg-slate-300 rounded w-[60%]"></div>
      <div className="flex gap-8">
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <div className="h-4 bg-slate-300 rounded w-[150px]"></div>
        </div>
        
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="h-4 bg-slate-300 rounded w-[150px]"></div>
        </div>
      </div>                        
      <div className="h-4 bg-slate-300 rounded w-[40%]"></div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="basis-2/3 h-3 bg-slate-300 rounded"></div>
          <div className="basis-1/3 h-3 bg-slate-300 rounded"></div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="basis-1/2 h-3 bg-slate-300 rounded"></div>
          <div className="basis-1/2 h-3 bg-slate-300 rounded"></div>
        </div>
        <div className="h-3 bg-slate-300 rounded w-full"></div>
        <div className="flex flex-row gap-2">
          <div className="basis-1/3 h-3 bg-slate-300 rounded"></div>
          <div className="basis-2/3 h-3 bg-slate-300 rounded"></div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="basis-1/6 h-5 bg-slate-300 rounded-lg"></div>
        <div className="basis-1/5 h-5 bg-slate-300 rounded-lg"></div>
        <div className="basis-1/6 h-5 bg-slate-300 rounded-lg"></div>
      </div>
      <div className="h-[46px] w-[46px] border-4 border-red-500 rounded-full flex justify-center items-center">
        <div className="text-red-500 font-bold text-[20px]">?</div>
      </div>
    </>
  )
}

function MovieDetailsBanner() {
  const movieDetails = useAsyncValue() as MovieDetails

  return (
    <>
      <div className="relative h-[600px] w-full rounded-b-lg">
        <img 
            src={GetImageUrl(movieDetails.backdrop_path, ImageSizes.Original)}
            className="absolute h-full w-full object-cover blur-sm brightness-50" alt="..." 
          />

        <div className="absolute w-full h-full flex items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center">
            <img 
              src={GetImageUrl(movieDetails.poster_path, ImageSizes.W500)} 
              className="w-[250px] h-[400px] rounded-lg"
            />
          </div>
          
          <div className="w-2/3 hidden md:flex flex-col gap-4 text-white">
            <MovieInfo movieDetails={movieDetails} />
          </div>
        </div>
      </div>

      <div className="md:hidden mt-4 flex flex-col gap-4 text-white pl-2">
        <MovieInfo movieDetails={movieDetails} />
      </div>
    </>
  )
}

function MovieInfo(props: { movieDetails: MovieDetails }) {
  const { movieDetails } = props
  
  return (
    <>
      <div className="font-bold text-4xl">{movieDetails.title}</div>
      <div className="flex gap-8">
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <div>{GetFormatedDate(movieDetails.release_date)}</div>
        </div>
        
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>{GetFormatedRuntime(movieDetails.runtime)}</div>
        </div>
      </div>                        
      <div className="italic">{movieDetails.tagline}</div>
      <div>{movieDetails.overview}</div>
      <div className="flex gap-2">
        <GenreBadges genres={movieDetails.genres} />
      </div>
      <MovieScore size={58} strokeWidth={3} score={movieDetails.vote_average} />
    </>
  )
}
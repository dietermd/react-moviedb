import { Await, defer, useLoaderData } from "react-router-dom";
import { MovieDetails } from "../../models/movieDetails";
import { Suspense } from "react";
import { API_KEY } from "../../utils/apiKey";
import MovieDetailsBanner from "./movieDetailsBanner";
import MoviePageLoading from "./movieDetailsLoading";
import MovieCastSlider from "./movieCastSlider";
import MovieTrailerSlider from "./movieTrailerSlider";

export async function MoviePageLoader({ params }: any) {
  const movieId = params.movieId as string
  const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}`)
  url.searchParams.append("api_key", API_KEY)
  url.searchParams.append("append_to_response", "credits,videos")  
  const movieDetailsPromise = fetch(url).then(res => res.json())
  return defer({movieDetails: movieDetailsPromise})
}

export default function MoviePage() {
  const data = useLoaderData() as { movieDetails: Promise<MovieDetails> };

  return (
    <>
      <Suspense fallback={<MoviePageLoading />}>
        <Await resolve={data.movieDetails}>
          {
            (movieDetails: MovieDetails) =>
              (
                <>
                  <MovieDetailsBanner movieDetails={movieDetails}/>

                  <div className="flex flex-col mt-3 px-4 gap-5">
                    <MovieTrailerSlider videos={movieDetails.videos}/>
                    <MovieCastSlider credits={movieDetails.credits}/>
                  </div>                
                </>
              )
          }
        </Await>
      </Suspense>
    </>
  )  
}
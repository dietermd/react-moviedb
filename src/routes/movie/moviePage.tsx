import { Await, defer, useLoaderData } from "react-router-dom";
import { MovieDetails } from "../../models/movieDetails";
import { Suspense } from "react";
import MovieDetailsBanner from "./movieDetailsBanner";
import MoviePageLoading from "./movieDetailsLoading";
import MovieCastSlider from "./movieCastSlider";
import MovieTrailerSlider from "./movieTrailerSlider";
import { FetchMovieDetailsPromise } from "../../utils/utils";

export async function MoviePageLoader({ params }: any) {
  const movieId = params.movieId as string
  const movieDetailsPromise = FetchMovieDetailsPromise(movieId)
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
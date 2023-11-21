import { Await, defer, useLoaderData } from "react-router-dom";
import { MovieDetails } from "../../models/movieDetails";
import { Suspense } from "react";
import { API_KEY } from "../../utils/apiKey";
import MovieDetailsBanner from "./movieDetailsBanner";
import MovieDetailsLoading from "./movieDetailsLoading";

export async function MoviePageLoader({ params }: any) {
  const movieId = params.movieId as string
  const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}`)
  url.searchParams.append("api_key", API_KEY)
  const movieDetailsPromise = fetch(url).then(res => res.json())
  return defer({movieDetails: movieDetailsPromise})
}

export default function MoviePage() {
  const data = useLoaderData() as { movieDetails: Promise<MovieDetails> };

  return (
    <>
      <Suspense fallback={<MovieDetailsLoading />}>
        <Await resolve={data.movieDetails}>
          <MovieDetailsBanner />
        </Await>
      </Suspense>
    </>
  )  
}
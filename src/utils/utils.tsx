import { Movie } from "../models/movie";
import { API_KEY } from "./apiKey";

const ImagesBaseURL: string = "https://image.tmdb.org/t/p/original"

export const GetImageUrl = (imgPath: string): string  => ImagesBaseURL + imgPath;

export const FetchUpcomingMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`)
  const json = await response.json()
  const movies = json.results as Movie[]
  return movies
}



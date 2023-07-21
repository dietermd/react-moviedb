import { Movie } from "../models/movie";
import { API_KEY } from "./apiKey";

const ImagesBaseURL: string = "https://image.tmdb.org/t/p/original"

export const GetImageUrl = (imgPath: string): string  => ImagesBaseURL + imgPath

export const FetchUpcomingMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`)
  const json = await response.json()
  const movies = json.results as Movie[]
  return movies
}

export const Genres = new Map<number, string>([
  [28, "Action"],
  [12, "Adventure"],
  [16, "Animation"],
  [35, "Comedy"],
  [80, "Crime"],
  [99, "Documentary"],
  [18, "Drama"],
  [10751, "Family"],
  [14, "Fantasy"],
  [36, "History"],
  [27, "Horror"],
  [10402, "Music"],
  [9648, "Mystery"],
  [10749, "Romance"],
  [878, "Science Fiction"],
  [10770, "TV Movie"],
  [53, "Thriller"],
  [10752, "War"],
  [37, "Western"]
])
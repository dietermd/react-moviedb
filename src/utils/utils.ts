import { Movie } from "../models/movie";
import { MovieDetails } from "../models/movieDetails";
import { Person } from "../models/person";
import { PersonDetails } from "../models/personDetails";
import { API_KEY } from "./apiKey";

const ImagesBaseURL: string = "https://image.tmdb.org/t/p"

export const enum ImageSizes {
  Original = "/original",
  W500 = "/w500"
}

export const GetImageUrl = (imgPath: string, imgSize: ImageSizes): string  => ImagesBaseURL + imgSize + imgPath

export const FetchMovieList = async (type: MovieListTypes) => {
  const url = new URL(`https://api.themoviedb.org/3/movie/${type}`)
  url.searchParams.append("api_key", API_KEY)
  const response = await fetch(url)
  const json = await response.json()
  const movies = json.results as Movie[]
  return movies
}

export const FetchMovieListPromise = (type: MovieListTypes): Promise<Movie[]> => {
  const url = new URL(`https://api.themoviedb.org/3/movie/${type}`)
  url.searchParams.append("api_key", API_KEY)
  const movieListPromise = fetch(url).then(res => res.json()).then(json => json.results)
  return movieListPromise
}

export const FetchPopularPeoplePromise = async (): Promise<Person[]> => {
  const url = new URL('https://api.themoviedb.org/3/person/popular')
  url.searchParams.append("api_key", API_KEY)
  const popularPeoplePromisse = fetch(url).then(res => res.json()).then(json => json.results)
  return popularPeoplePromisse
}

export const SearchMovies = async (query: string) => {
  const url = new URL('https://api.themoviedb.org/3/search/movie')
  url.searchParams.append("api_key", API_KEY)
  url.searchParams.append("query", query)
  const response = await fetch(url)
  const json = await response.json()
  const movies = json.results as Movie[]
  return movies
}

export const FetchMovieDetailsPromise = (movieId: string): Promise<MovieDetails> => {
  const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}`)
  url.searchParams.append("api_key", API_KEY)
  url.searchParams.append("append_to_response", "credits,videos")
  const movieDetailsPromise = fetch(url).then(res => res.json())
  return movieDetailsPromise
}

export const FetchPersonDetailsPromise = (personId: string): Promise<PersonDetails> => {
  const url = new URL(`https://api.themoviedb.org/3/person/${personId}`)
  url.searchParams.append("api_key", API_KEY)
  url.searchParams.append("append_to_response", "images,movie_credits")
  const personDetailsPromise = fetch(url).then(res => res.json())
  return personDetailsPromise
}

export const GetFormatedDate = (date: string) => new Date(date).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"})

export const enum MovieListTypes {
  NowPlaying = "now_playing",
  Popular = "popular",
  TopRated = "top_rated",
  Upcoming = "upcoming"
}

export const GenresMap = new Map<number, string>([
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
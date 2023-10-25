import { useLoaderData } from "react-router-dom";
import { FetchMovieDetails, GetImageUrl, ImageSizes } from "../../utils/utils";
import { MovieDetails } from "../../models/movieDetails";

export async function MoviePageLoader({ params }: any) {
  const movieId = params.movieId as string
  const movieDetails = await FetchMovieDetails(movieId)
  return movieDetails
}


export default function MoviePage() {
  const movieDetails = useLoaderData() as MovieDetails;

  return (
    <>
      <div className="relative h-[600px] w-full rounded-b-lg">
        <div className="absolute z-10 h-full w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
          <img 
            src={GetImageUrl(movieDetails.poster_path, ImageSizes.W500)} 
            className="h-[225px] w-[150px] rounded-lg border-red-500 border-2"
          />
          <div className="text-white font-bold text-4xl text-center">{movieDetails.title}</div>
        </div>
        <img 
          src={GetImageUrl(movieDetails.backdrop_path, ImageSizes.Original)}
          className="h-full w-full object-cover blur-sm brightness-50" alt="..." 
        />
      </div>
    </>
  )
}
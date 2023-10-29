import { useLoaderData } from "react-router-dom";
import { FetchMovieDetails, GetFormatedDate, GetImageUrl, ImageSizes } from "../../utils/utils";
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
        <div className="absolute z-10 w-full h-full flex items-center gap-8">
          <div className="w-full md:w-1/3 flex items-center">
            <img 
              src={GetImageUrl(movieDetails.poster_path, ImageSizes.W500)} 
              className="w-[250px] h-[400px] rounded-lg ml-auto"
            />
          </div>
          
          <div className="w-2/3 flex md:flex-col gap-4 text-white">            
            <div className="font-bold text-4xl">{movieDetails.title}</div>
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              <div>{GetFormatedDate(movieDetails.release_date)}</div>
            </div>
            <div>{movieDetails.overview}</div>
            <div className="flex gap-2">
              {
                movieDetails.genres.map((genre, i) => 
                  <div key={i} className="border-2 border-white rounded-lg px-2">
                    {genre.name}
                  </div>
                )
              }
            </div>
          </div>
        </div>

        
        <img 
          src={GetImageUrl(movieDetails.backdrop_path, ImageSizes.Original)}
          className="h-full w-full object-cover blur-sm brightness-50" alt="..." 
        />
      </div>
    </>
  )
}
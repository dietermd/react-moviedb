import { Movie } from "../../models/movie"
import { GetFormatedDate, GetImageUrl, ImageSizes } from "../../utils/utils"

type SearchModalMovieCardProps = {
  movie: Movie
}

export default function SearchModalMovieCard(props: SearchModalMovieCardProps) {
  const { movie } = props;
  return (
    <>
      <div className="group flex h-[158px] p-1">
        <div className="basis-1/4">
          <img src={GetImageUrl(movie.poster_path, ImageSizes.W500)} className="w-[100px] h-[150px] rounded-lg" />  
        </div>
        <div className="basis-3/4 flex flex-col">
          <div className="group-hover:text-red-500 font-bold">{movie.title}</div>
          <div className="text-sm line-clamp-4">
            {movie.overview}
          </div>
          <div className="flex items-center gap-2 mt-auto pb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-3 h-3 stroke-black group-hover:stroke-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            <div className="text-xs text-gray-700 group-hover:text-red-500">{GetFormatedDate(movie.release_date)}</div>
          </div>
        </div>
      </div>
    </>
  )
}
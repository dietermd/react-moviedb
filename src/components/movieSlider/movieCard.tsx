import { useEffect, useState } from "react"
import { GetFormatedDate, GetImageUrl, ImageSizes } from "../../utils/utils"
import MovieCardLoading from "./movieCardLoading"
import MovieScore from "./movieScore"
import { Link } from "react-router-dom"

type MovieCardProps = {
  movie_id: number
  title: string
  release_date: string
  poster_path: string
  vote_average: number
}

export default function MovieCard(props: MovieCardProps) {  
  
  const posterUrl = GetImageUrl(props.poster_path, ImageSizes.W500)
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image()
    img.onload = () => setImgLoaded(true)
    img.src = posterUrl
  }, [])

  return (
    imgLoaded ? <RenderMovieCard /> : <MovieCardLoading />
  )

  function RenderMovieCard() {
    return (
      <>
        <Link to={`/movie/${props.movie_id}`} className="flex flex-col w-[150px]">          
          <div className="h-[225px] relative">
            <img src={posterUrl} className="w-full rounded-lg" />
            <div className="absolute -bottom-3 -right-3">
              <MovieScore size={46} strokeWidth={2} score={props.vote_average} />
            </div>
          </div>
          <div className="mt-2 px-[10px] text-sm text-center">
            <div className="font-bold text-white">{props.title}</div>
            <div className="text-white/50">{GetFormatedDate(props.release_date)}</div>
          </div>        
        </Link>
      </>
    )
  }
}
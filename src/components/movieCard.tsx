import { useEffect, useState } from "react"
import { GetFormatedDate, GetImageUrl, ImageSizes } from "../utils/utils"
import MovieCardLoading from "./movieSlider/movieCardLoading"

type MovieCardProps = {
  title: string
  release_date: string
  poster_path: string
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
    imgLoaded ? RenderMovieCard() : <MovieCardLoading />
  )

  function RenderMovieCard() {
    return (
      <>
        <div className="flex flex-col w-[150px]">
          <a href="#">
            <img src={posterUrl} className="w-full h-[225px] rounded-lg" />          
          </a>
          <div className="mt-2 px-[10px] text-sm text-center">
            <div className="font-bold text-white">{props.title}</div>
            <div className="text-white/50">{GetFormatedDate(props.release_date)}</div>
          </div>        
        </div>
      </>
    )
  }
}
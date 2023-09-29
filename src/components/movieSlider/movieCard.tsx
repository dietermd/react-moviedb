import { useEffect, useState } from "react"
import { GetFormatedDate, GetImageUrl, ImageSizes } from "../../utils/utils"
import MovieCardLoading from "./movieCardLoading"

type MovieCardProps = {
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
    imgLoaded ? RenderMovieCard() : <MovieCardLoading />
  )

  function RenderMovieCard() {
    return (
      <>
        <div className="flex flex-col w-[150px]">          
          <a href="#" className="h-[225px] relative">
            <img src={posterUrl} className="w-full rounded-lg" />
            <div className="absolute -bottom-3 -right-3">
              {RenderScore(46, 2, props.vote_average)}
            </div>
          </a>
          <div className="mt-2 px-[10px] text-sm text-center">
            <div className="font-bold text-white">{props.title}</div>
            <div className="text-white/50">{GetFormatedDate(props.release_date)}</div>
          </div>        
        </div>
      </>
    )
  }

  function RenderScore(size: number, strokeWidth: number, score: number) {
    const center = size / 2;
    const radius = (size / 2) - (strokeWidth * 2)
    const circumference = radius * 2 * Math.PI
    const strokeDashoffset = circumference - score / 10 * circumference;
    const fontSize = `${radius * 0.7}px`;
    return (
      <>
        <svg height={size} width={size} className="flex justify-center align-middle stroke-red-600">
          <circle
            className="origin-center -rotate-90"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            strokeDashoffset={strokeDashoffset}
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
          />
          <text
            fontSize={fontSize}
            x={center}
            y={center}
            text-anchor="middle"
            stroke-width="1px"
            alignment-baseline="middle"
          >
            {score}
          </text>
        </svg>
      </>
    )
  }
}
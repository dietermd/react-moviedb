import { useAsyncValue } from "react-router-dom"
import { MovieDetails, Site, Type } from "../../models/movieDetails"
import { Swiper } from "swiper/react"
import { FreeMode, Pagination } from "swiper/modules"
import { SwiperSlide } from "swiper/react"

export default function MovieTrailerSlider() {
  const movieDetails = useAsyncValue() as MovieDetails

  const slides = movieDetails.videos.results
  .filter(x => x.site === Site.YouTube
    && x.type === Type.Trailer)
  .map((x, i) => 
      <SwiperSlide key={i} className="w-auto inline-block">
        <iframe 
          width="560" height="315"
          src={`https://www.youtube.com/embed/${x.key}`}
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="border-0"
          >
        </iframe>
      </SwiperSlide>
    )

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="text-white font-bold text-2xl">Trailers</div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          modules={[Pagination, FreeMode]}
          pagination={{clickable: true}}
          className="w-full h-[350px]"
        >
          {
            slides
          }
        </Swiper>
      </div>
    </>
  )
}
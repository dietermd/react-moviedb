import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardLoading from "./movieCardLoading";
import { FreeMode, Pagination } from "swiper/modules";

export default function MovieSliderLoading() {
  const slides = Array(15).fill(undefined).map((_, i) => 
    <SwiperSlide key={i} className="w-auto inline-block">
      <MovieCardLoading />
    </SwiperSlide>
  )

    return (
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        freeMode={true}
        pagination={{dynamicBullets: true}}
        modules={[Pagination, FreeMode]}
        className="w-full h-[350px]"
      >
        {
          slides
        }
      </Swiper>
    )
}
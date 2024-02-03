import { Swiper, SwiperSlide } from "swiper/react"
import PeopleCardLoading from "./peopleCardLoading"
import { FreeMode, Pagination } from "swiper/modules"

export default function PeopleSliderLoading() {
    const slides = Array(15).fill(undefined).map((_, i) => 
    <SwiperSlide key={i} className="w-auto inline-block">
      <PeopleCardLoading />
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
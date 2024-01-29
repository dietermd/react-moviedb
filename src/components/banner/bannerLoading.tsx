import { Swiper, SwiperSlide } from "swiper/react";
import MovieInfoLoading from "./movieInfoLoading";
import { Pagination } from "swiper/modules";

export default function BannerLoading() {
  return (
      <Swiper pagination={true} modules={[Pagination]} className="banner-swiper h-[600px] w-full rounded-b-lg">
        <SwiperSlide>
          <MovieInfoLoading />
        </SwiperSlide> 
      </Swiper> 
  )
}
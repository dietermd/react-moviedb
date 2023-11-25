import { Swiper, SwiperSlide } from "swiper/react";
import PeopleCard from "../../components/peopleSlider/peopleCard";
import { FreeMode, Pagination } from "swiper/modules";
import { useAsyncValue } from "react-router-dom";
import { MovieDetails } from "../../models/movieDetails";

export default function MovieCastSlider() {
  const movieDetails = useAsyncValue() as MovieDetails

  const slides = movieDetails.credits.cast.filter(p => p.profile_path).map((person, i) => 
    <SwiperSlide key={i} className="w-auto inline-block">
      <PeopleCard name={person.name} character={person.character} profile_path={person.profile_path!} />
    </SwiperSlide>
  )

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="text-white font-bold text-2xl">Cast</div>
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
      </div>
    </>
  )
}
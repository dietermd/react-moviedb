import { useEffect, useState } from "react"
import { People } from "../../models/people";
import { FetchPopularPeople } from "../../utils/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import PeopleCardLoading from "./peopleCardLoading";
import PeopleCard from "./peopleCard";

export default function PeopleSlider() {
  
  const [popularPeople, setPopularPeople] = useState<People[]>([]);

  useEffect(() => {
    FetchPopularPeople()
      .then(people => setPopularPeople(people))
  }, [])

  const slides = popularPeople.length > 0 ?
  popularPeople.map((person, i) => 
  <SwiperSlide key={i} className="w-auto inline-block">
    <PeopleCard
      name={person.name}
      profile_path={person.profile_path}
    />
  </SwiperSlide>
  )
  :
  Array(15).fill(undefined).map((_, i) => 
    <SwiperSlide key={i} className="w-auto inline-block">
      <PeopleCardLoading />
    </SwiperSlide>
  )

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="text-white font-bold text-2xl">Popular People</div>
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
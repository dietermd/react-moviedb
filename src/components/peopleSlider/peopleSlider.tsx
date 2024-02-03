import { useEffect, useState } from "react"
import { People } from "../../models/people";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import PeopleCard from "./peopleCard";

export default function PeopleSlider(props: { people: People[] }) {

  const slides = props.people.map((person, i) => 
  <SwiperSlide key={i} className="w-auto inline-block">
    <PeopleCard
      name={person.name}
      profile_path={person.profile_path}
    />
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
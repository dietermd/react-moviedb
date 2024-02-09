import { Person } from "../../models/person";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import PeopleCard from "./peopleCard";

export default function PeopleSlider(props: { people: Person[] }) {

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
    </>
  )
}
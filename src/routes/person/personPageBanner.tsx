import { Swiper, SwiperSlide } from "swiper/react";
import { PersonDetails } from "../../models/personDetails";
import { GetImageUrl, ImageSizes } from "../../utils/utils";
import { Pagination } from "swiper/modules";

export default function PersonPageBanner(props: {personDetails: PersonDetails}) {
  const { personDetails } = props; 
  const imageSlides = personDetails.images.profiles.map((x, i) =>
    <SwiperSlide key={i} className="flex justify-center items-center">
      <img
        src={GetImageUrl(x.file_path, ImageSizes.W500)}
        className="w-[250px] h-[400px] rounded-lg"
      />
    </SwiperSlide>
  )

  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-[900px] md:h-[600px] md:gap-8">
        
        <Swiper 
          pagination={{dynamicBullets: true}} 
          modules={[Pagination]}
          className="h-[600px] w-full md:w-1/3 backdrop-brightness-125"
        >
          {
            imageSlides
          }
        </Swiper>
        

        <div className="h-[300px] md:h-[600px] w-full md:w-2/3 flex flex-col gap-4 justify-center text-white p-4 md:p-0 md:pr-4">
          <div className="font-bold text-4xl">{personDetails.name}</div>
          <div className="font-bold text-2xl">Biography</div>
          <div className="line-clamp-[10]">{personDetails.biography}</div>
        </div>

      </div>
    </>
  )
}
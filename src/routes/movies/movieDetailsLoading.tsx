import { FreeMode, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import PeopleCardLoading from "../../components/peopleSlider/peopleCardLoading"

export default function MoviePageLoading() {
  return (
    <>
      <div className="relative h-[600px] w-full rounded-b-lg">
        <div className="absolute w-full h-full flex items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center">
            <div className="w-[250px] h-[400px] rounded-lg bg-slate-300 animate-pulse">
            </div>
          </div>
          
          <div className="w-2/3 hidden md:flex flex-col gap-4 animate-pulse">
            <MovieInfoLoading />
          </div>          
        </div>
      </div>

      <div className="md:hidden mt-4 flex flex-col gap-4 pl-2 animate-pulse">
        <MovieInfoLoading />
      </div>

      <CastLoading />      
    </>
  )
}

function MovieInfoLoading() {
  return (
    <>
      <div className="h-6 bg-slate-300 rounded w-[60%]"></div>
      <div className="flex gap-8">
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <div className="h-4 bg-slate-300 rounded w-[150px]"></div>
        </div>
        
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="h-4 bg-slate-300 rounded w-[150px]"></div>
        </div>
      </div>                        
      <div className="h-4 bg-slate-300 rounded w-[40%]"></div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="basis-2/3 h-3 bg-slate-300 rounded"></div>
          <div className="basis-1/3 h-3 bg-slate-300 rounded"></div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="basis-1/2 h-3 bg-slate-300 rounded"></div>
          <div className="basis-1/2 h-3 bg-slate-300 rounded"></div>
        </div>
        <div className="h-3 bg-slate-300 rounded w-full"></div>
        <div className="flex flex-row gap-2">
          <div className="basis-1/3 h-3 bg-slate-300 rounded"></div>
          <div className="basis-2/3 h-3 bg-slate-300 rounded"></div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="basis-1/6 h-5 bg-slate-300 rounded-lg"></div>
        <div className="basis-1/5 h-5 bg-slate-300 rounded-lg"></div>
        <div className="basis-1/6 h-5 bg-slate-300 rounded-lg"></div>
      </div>
      <div className="h-[46px] w-[46px] border-4 border-red-500 rounded-full flex justify-center items-center">
        <div className="text-red-500 font-bold text-[20px]">?</div>
      </div>
    </>
  )
}

function CastLoading() {
  return (
    <div className="flex flex-col mt-3 px-4 gap-5">
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
            Array(15).fill(undefined).map((_, i) => 
              <SwiperSlide key={i} className="w-auto inline-block">
                <PeopleCardLoading />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </div> 
  )
}
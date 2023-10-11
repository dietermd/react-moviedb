import { useEffect, useState } from "react";
import { GetImageUrl, ImageSizes } from "../../utils/utils"
import PeopleCardLoading from "./peopleCardLoading";

type PeopleCardProps = {
  name: string,
  profile_path: string
}

export default function PeopleCard(props: PeopleCardProps) {
  
  const profileUrl = GetImageUrl(props.profile_path, ImageSizes.W500)
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image()
    img.onload = () => setImgLoaded(true)
    img.src = profileUrl
  }, [])



  return (
    imgLoaded ? RenderPeopleCard() : <PeopleCardLoading />
  )

  function RenderPeopleCard() {
    return (
      <>
        <div className="flex flex-col w-[150px]">          
          <a href="#" className="h-[225px] relative">
            <img src={profileUrl} className="w-full rounded-lg" />
          </a>
          <div className="mt-2 px-[10px] text-sm text-center">
            <div className="font-bold text-white">{props.name}</div>
          </div>        
        </div>
      </>
    )
  }
}
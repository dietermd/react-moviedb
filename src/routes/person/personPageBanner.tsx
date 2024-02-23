import { PersonDetails } from "../../models/personDetails";
import { GetImageUrl, ImageSizes } from "../../utils/utils";

export default function PersonPageBanner(props: {personDetails: PersonDetails}) {
  const { personDetails } = props; 
  const profileUrl = GetImageUrl(personDetails.profile_path, ImageSizes.W500)

  return (
    <>
      <div className="relative h-[900px] md:h-[600px] w-full">
        <div className="absolute flex flex-col md:flex-row w-full h-full md:gap-8">
          <div className="h-[600px] w-full md:w-1/3 flex justify-center items-center backdrop-brightness-125">
            <img src={profileUrl} className="w-[250px] h-[400px] rounded-lg" />
          </div>

          <div className="h-[300px] md:h-[600px] w-full md:w-2/3 flex flex-col gap-4 justify-center text-white pr-4">
            <div className="font-bold text-4xl">{personDetails.name}</div>
            <div className="line-clamp-[10]">{personDetails.biography}</div>
          </div>
        </div>
      </div>
    </>
  )
}
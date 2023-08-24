import { GetImageUrl, ImageSizes } from "../../utils/utils";

export default function MovieImageCover(props: {backdrop_path: string}) {
  return (
    <>
      <div className="banner-image-cover relative h-full w-full md:w-3/4 float-right">
        <div className="banner-inner-image-cover h-full w-full">
          <img src={GetImageUrl(props.backdrop_path, ImageSizes.Original)} className="absolute h-full w-full object-cover mix-blend-overlay" alt="..." />
        </div>
      </div> 
    </>
  )
}
import { Genre } from "../../models/movieDetails";
import { GenresMap } from "../../utils/utils";

type genreBadgesProps = {
  genres: number[] | Genre[]
}

export default function GenreBadges(props: genreBadgesProps) {
  const { genres } = props
  return (
    <>
      {
        genres.map((genre, i) => 
          <div key={i} className="border-2 border-white rounded-lg px-2">
            { typeof genre === "number" ? GenresMap.get(genre) : genre.name }
          </div>
        )
      }
    </>
  )

}
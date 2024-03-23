import { Link } from "react-router-dom";
import { PersonDetails } from "../../models/personDetails";
import { GenderMap, GetFormatedDate } from "../../utils/utils";

export default function PersonPageInfo(props: { personDetails: PersonDetails }) {
  const { personDetails } = props;

  const movieCredits = personDetails.movie_credits.cast
    .filter(x => x.release_date)
    .sort((a, b) => new Date(b.release_date).valueOf() - new Date(a.release_date).valueOf())
    .map((movie, i) => {
      const even = i % 2 === 0;
      let className = "flex align-middle justify-between p-4 hover:backdrop-brightness-200"
      if (even) {
        className += " backdrop-brightness-125";
      }

      return (
        <Link key={i} to={`/movie/${movie.id}`} className={className}>
          <span>{`${new Date(movie.release_date).getUTCFullYear()} - ${movie.title}`}</span>          
          <span className="text-white/60">{movie.character ? `as ${movie.character}` : ""}</span>
        </Link>
      )
  })

  return (
    <>
      
        <div className="flex flex-col md:flex-row w-full md:gap-8">
            <div className="w-full md:w-1/3 flex flex-col gap-4 backdrop-brightness-125 p-4 text-white">
              <div className="font-bold text-2xl">Personal Info</div>

              <div>
                <p className="font-bold">Known For</p>
                <p>{personDetails.known_for_department}</p>
              </div>

              <div>
                <p className="font-bold">Gender</p>
                <p>{GenderMap.get(personDetails.gender)}</p>
              </div>

              <div>
                <p className="font-bold">Birthday</p>
                <p>{GetFormatedDate(personDetails.birthday)}</p>
              </div>

              <div>
                <p className="font-bold">Place of Birth</p>
                <p>{personDetails.place_of_birth}</p>
              </div>

              <div>
                <p className="font-bold">Also Known As</p>
                {personDetails.also_known_as.map(x => <p>{x}</p>)}
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col gap-4 p-4 md:p-0 md:pr-4 text-white">
              <div className="font-bold text-2xl">Credits</div>
              <div className="flex flex-col justify-center">
                { movieCredits }
              </div>
            </div>
        </div>
      
    </>
  )
}
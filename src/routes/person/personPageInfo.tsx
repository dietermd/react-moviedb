import { PersonDetails } from "../../models/personDetails";
import { GenderMap, GetFormatedDate } from "../../utils/utils";

export default function PersonPageInfo(props: { personDetails: PersonDetails }) {
  const {personDetails} = props;

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

            <div className="w-full md:w-2/3 flex flex-col gap-4 justify-center text-white pr-4">
              
            </div>
        </div>
      
    </>
  )
}
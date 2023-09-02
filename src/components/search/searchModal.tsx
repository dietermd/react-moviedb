import { Movie } from "../../models/movie"

type searchModalProps = {
  movies: Movie[]
}

export default function SearchModal(props: searchModalProps) {
  return (
    <>
      <div className="fixed inset-x-0 top-[70px] px-6 flex justify-center">
        <div className="basis-8/12 flex justify-center">
          <div className="w-3/4 lg:w-2/3 xl:w-3/5 bg-white rounded-lg p-4">
            Modal
          </div>          
        </div>        
      </div>
    </>
  )
}
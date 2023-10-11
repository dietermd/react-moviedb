import { MovieListTypes } from "../utils/utils";
import MovieSlider from "./movieSlider/movieSlider";
import PeopleSlider from "./peopleSlider/peopleSlider";

export default function BodySliders() {
  return (
    <>
      <MovieSlider
        Title="Now Playing"
        MovieListType={MovieListTypes.NowPlaying}
      />

      <MovieSlider
        Title="Top Rated"
        MovieListType={MovieListTypes.TopRated}
      />

      <PeopleSlider />
    </>
  )
}
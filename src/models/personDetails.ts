export type PersonDetails = {
  adult:                boolean;
  also_known_as:        string[];
  biography:            string;
  birthday:             string;
  gender:               number;
  id:                   number;
  known_for_department: string;
  name:                 string;
  place_of_birth:       string;
  popularity:           number;
  profile_path:         string;
  images:               Images;
  movie_credits:        MovieCredits;
}

export interface Images {
  profiles: Profile[];
}

export interface Profile {
  aspect_ratio: number;
  height:       number;
  iso_639_1:    null;
  file_path:    string;
  vote_average: number;
  vote_count:   number;
  width:        number;
}

export interface MovieCredits {
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguage;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       null | string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
  character?:        string;
  credit_id:         string;
  order?:            number;
  department?:       string;
  job?:              string;
}

export enum OriginalLanguage {
  El = "el",
  En = "en",
  Xx = "xx",
}
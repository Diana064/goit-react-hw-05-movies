import {
  Wrapper,
  GenresList,
  GenresItem,
  TitleItem,
  IMG,
  ButtonGoBack,
  WrapperContenxt,
} from './MovieData.module';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const MovieData = ({ handleGoBack, img, title, average, genres, overview }) => {
  return (
    <Wrapper>
      <h1>Movie Details</h1>
      <ButtonGoBack type="button" onClick={handleGoBack}>
        <AiOutlineArrowLeft />
        Go back
      </ButtonGoBack>
      <WrapperContenxt>
        <div>
          <IMG src={`${BASE_IMG_URL + img}`} alt={title}></IMG>
        </div>
        <div>
          <h2>{title}</h2>
          <h2>
            Average:<TitleItem> {average}</TitleItem>
          </h2>

          <h2>Overview</h2>
          {overview ?? <p>{overview}</p>}
          <h2>Genres</h2>
          <GenresList>
            {genres.map(genre => (
              <GenresItem key={genre.id}>{genre.name}</GenresItem>
            ))}
          </GenresList>
          {/* <h2>{movies.genres}</h2> */}
        </div>
      </WrapperContenxt>
    </Wrapper>
  );
};
export default MovieData;

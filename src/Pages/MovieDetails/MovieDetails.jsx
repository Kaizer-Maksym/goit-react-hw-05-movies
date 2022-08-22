import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import { BsArrowLeft } from 'react-icons/bs';

import {
  LinkBtn,
  MovieCard,
  FilmReview,
  FilmMeta,
  FilmTitle,
  SectionHeading,
  FilmInfo,
  Link,
  CreditsList,
} from './MovieDetails.styled';

let imageURL = 'https://image.tmdb.org/t/p/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkHref = location?.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) {
      return;
    }

    try {
      fetchMovieDetails(movieId).then(setMovie);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {movie && (
        <MovieCard>
          <LinkBtn to={backLinkHref}>
            <BsArrowLeft size="25px" color="#ffffff" style={{}} />
            Go back
          </LinkBtn>
          <FilmReview>
            <div>
              <img
                width="300"
                src={`${imageURL}w342${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
            </div>
            <FilmMeta>
              <FilmTitle>{movie.title}</FilmTitle>
              <FilmInfo>
                User score: {(movie.vote_average * 10).toFixed(1)} %
              </FilmInfo>
              <SectionHeading>Overview</SectionHeading>
              <FilmInfo>{movie.overview}</FilmInfo>
              <SectionHeading>Genres:</SectionHeading>
              <FilmInfo>
                {movie.genres.map(({ name }) => name).join(' ')}
              </FilmInfo>
            </FilmMeta>
          </FilmReview>
        </MovieCard>
      )}
      <hr />
      <CreditsList>
        <li>
          {location.state !== null ? (
            <Link to="cast" state={{ from: location.state.from }}>
              Cast
            </Link>
          ) : (
            <Link to="cast">Cast</Link>
          )}
        </li>
        <li>
          {location.state !== null ? (
            <Link to="reviews" state={{ from: location.state.from }}>
              Reviews
            </Link>
          ) : (
            <Link to="reviews">Reviews</Link>
          )}
        </li>
      </CreditsList>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

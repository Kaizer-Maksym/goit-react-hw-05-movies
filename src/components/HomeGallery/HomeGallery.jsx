import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem, ListImg } from './HomeGallery.styled';

let IMG_URL = 'https://image.tmdb.org/t/p/';

const HomeGallery = ({ movies }) => {
  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <ListItem key={id}>
              <Link to={`/movies/${id}`}>
                <ListImg
                  height="100%"
                  loading="leasy"
                  src={`${IMG_URL}w342${poster_path}`}
                  alt={title}
                />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
HomeGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default HomeGallery;

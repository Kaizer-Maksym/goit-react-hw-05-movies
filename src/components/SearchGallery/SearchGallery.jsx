import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListImg, Container } from './SearchGallery.styled';

let IMG_URL = 'https://image.tmdb.org/t/p/';

const SearchGallery = ({ searchMovie }) => {
  const location = useLocation();
  return (
    <Container>
      <List>
        {searchMovie.length > 0 &&
          searchMovie.map(({ title, id, poster_path }) => {
            return (
              <ListItem key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <ListImg
                    loading="leasy"
                    src={`${IMG_URL}w342${poster_path}`}
                    alt={title}
                  />
                </Link>
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
};
SearchGallery.propTypes = {
  searchMovie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default SearchGallery;

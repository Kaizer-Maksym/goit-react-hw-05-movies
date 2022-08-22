import { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, SearchBtn } from './SearchBar.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '500px',
  position: 'center-top',
  pauseOnHover: true,
  fontSize: '20px',
  cssAnimationStyle: 'zoom',
  useIcon: false,
  warning: {
    background: 'transparent',
    textColor: 'rgb(255, 107, 8)',
  },
});

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      Notify.warning('Please! Enter a keyword for search a movie!!');

      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input onChange={handleChange} type="text" value={query} />

      <SearchBtn type="submit">Search</SearchBtn>
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

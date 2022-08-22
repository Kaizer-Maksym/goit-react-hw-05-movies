import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Button } from './Scroll.styled';

const ScrollTop = ({ query }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (query === [] && null) {
      return;
    }
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [query]);

  return (
    <>
      {visible ? (
        <Button type="button" onClick={scrollTop}>
          <BsFillArrowUpCircleFill size="100%" color="rgb(255, 107, 8)" />
        </Button>
      ) : null}
    </>
  );
};

ScrollTop.propTypes = {
  query: PropTypes.arrayOf(PropTypes.shape),
};

export default ScrollTop;

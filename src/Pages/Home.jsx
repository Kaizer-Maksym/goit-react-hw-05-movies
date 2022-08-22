import { useEffect, useState } from 'react';
// ---API request
import { getTrending } from '../services/api';
// ---Components
import PageHeading from '../components/PageHeading/PageHeading';
import ScrollTop from 'components/ScrollTop/ScrollTop';
import { Container } from '../components/HomeGallery/HomeGallery.styled';
import HomeGallery from 'components/HomeGallery/HomeGallery';
import BasicPagination from '../components/Pagination/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (!page) {
      return;
    } else {
      try {
        getTrending(page).then(resp => {
          setTotalPage(resp.total_pages);
          setMovies(resp.results);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [page]);

  return (
    <>
      <Container>
        <PageHeading />
        <HomeGallery movies={movies} />
        <ScrollTop query={movies} />
      </Container>
      <BasicPagination totalPage={totalPage} onChange={setPage} />
    </>
  );
};

export default Home;

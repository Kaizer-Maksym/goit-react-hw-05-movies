import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetshReviews } from '../../services/api';
import { ReviewAthor, ReviewContent, TxtContainer } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      fetshReviews(movieId).then(setReviews);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      <TxtContainer>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => {
            return (
              <ReviewContent key={id}>
                <ReviewAthor>{`Author: ${author}`}</ReviewAthor>
                <p>{content.replace(/[^a-zа-яё0-9.,/'<>-]/gi, ' ')}</p>
              </ReviewContent>
            );
          })
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </TxtContainer>
    </div>
  );
};

export default Reviews;

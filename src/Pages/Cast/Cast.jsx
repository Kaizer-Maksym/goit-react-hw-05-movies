import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from '../../services/api';
import { ActorsList, ActorsCard, Actor, Role, ActorImg } from './Cast.styled';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Oscar from '../../images/oscar-award.jpg';

let imageURL = 'https://image.tmdb.org/t/p/';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    if (actors) {
      return;
    }
    try {
      fetchActors(movieId).then(setActors);
    } catch (error) {
      console.log(error);
    }
  }, [movieId, actors]);

  return (
    <>
      <ActorsList>
        {actors &&
          actors.map(({ cast_id, name, character, profile_path }) => {
            return (
              <ActorsCard key={cast_id}>
                {profile_path !== null ? (
                  <ActorImg
                    src={`${imageURL}w342${profile_path}`}
                    alt={name}
                    loading="lazy"
                  />
                ) : (
                  <ActorImg
                    height="300"
                    src={Oscar}
                    alt={name}
                    loading="lazy"
                  />
                )}
                <Actor>{name}</Actor>
                <Role>{character}</Role>
              </ActorsCard>
            );
          })}
      </ActorsList>
      <ScrollTop query={actors} />
    </>
  );
};

export default Cast;

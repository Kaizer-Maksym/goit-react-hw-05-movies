import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieCard = styled.div`
  padding: 20px 30px 0 30px;
  width: 1280px;
`;

export const LinkBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  color: #ffffff;

  width: 120px;
  height: 40px;
  padding: 5px;

  text-decoration: none;
  font-weight: 600;
  font-size: 16px;

  margin-bottom: 20px;
  background-color: rgb(255, 107, 8);

  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1), 2px 2px 0px rgba(0, 0, 0, 0.2),
    2px 2px 0px rgba(0, 0, 0, 0.2);

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: rgb(255, 107, 8);
    background-color: #ffffff;
    border: 2px solid rgb(255, 107, 8);

    svg {
      fill: rgb(255, 107, 8);
    }
  }
`;

export const FilmReview = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 20px;
`;

export const FilmMeta = styled.div`
  display: grid;
  row-gap: 20px;
`;

export const FilmTitle = styled.h2`
  margin: 0;
  padding: 0;

  font-size: 30px;
  font-weight: 600px;
  text-transform: uppercase;
`;

export const SectionHeading = styled.h3`
  margin: 0;
  padding: 0;

  font-size: 20px;
  font-weight: 500;
`;

export const FilmInfo = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;

export const Link = styled(NavLink)`
  color: rgb(255, 107, 8);
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  padding-bottom: 5px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #2193f6;
  }

  &:hover:not(.active) {
    color: #2193f6;
  }
`;

export const CreditsList = styled.ul`
  display: flex;
  align-items: center;

  column-gap: 15px;
  list-style: none;
`;

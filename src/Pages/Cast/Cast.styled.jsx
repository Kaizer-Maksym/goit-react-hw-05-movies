import styled from '@emotion/styled';

export const ActorsList = styled.ul`
  display: grid;
  width: 1280px;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  align-content: center;

  grid-gap: 15px;

  list-style: none;
`;

export const ActorsCard = styled.li`
  display: grid;
  row-gap: 5px;
  background-color: rgba(223, 217, 217, 0.8);

  padding-bottom: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3), 4px 4px 4px rgba(0, 0, 0, 0.3),
    1px 4px 6px rgba(0, 0, 0, 0.3);
`;

export const Actor = styled.h3`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const Role = styled.p`
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: rgb(255, 107, 8);
`;

export const ActorImg = styled.img`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
`;

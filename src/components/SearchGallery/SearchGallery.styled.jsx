import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 30px 100px;
`;

export const List = styled.ul`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 240px));
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 20px;

  justify-content: center;
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const ListItem = styled.li`
  display: grid;
  row-gap: 5px;

  transition: 250ms linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.05);
  }
`;

export const LinlText = styled.span`
  display: block;

  text-decoration: none;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: rgb(255, 107, 8);
`;

export const ListImg = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.3),
    0px 0px 6px 2px rgba(0, 0, 0, 0.3), 0px 0px 6px 2px rgba(0, 0, 0, 0.2);
`;

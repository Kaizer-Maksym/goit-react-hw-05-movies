import styled from '@emotion/styled';

export const Button = styled.button`
  position: fixed;
  bottom: 5px;
  right: 5px;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: transparent;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(255, 107, 8);
    svg {
      fill: #ffffff;
    }
  }
`;

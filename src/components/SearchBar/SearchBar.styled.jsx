import styled from '@emotion/styled';

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 5px 5px;
  outline: none;
  border: none;

  border-bottom: 2px solid rgb(255, 107, 8);

  margin-right: 10px;

  font-weight: 500;
  font-size: 16px;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border: 2px solid rgb(255, 107, 8);
    box-shadow: 0px 0px 6px 3px rgba(255, 107, 8, 0.7);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0;
`;

export const SearchBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  outline: none;
  background-color: rgb(255, 107, 8);
  color: #ffffff;
  box-shadow: 2px 2px 0px 1px rgba(137, 134, 134, 0.3);

  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: rgb(255, 107, 8);
    background-color: #ffffff;
    border: 2px solid rgb(255, 107, 8);
  }

  &:hover > svg {
    color: rgb(255, 107, 8);
  }
`;

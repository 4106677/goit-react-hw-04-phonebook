import styled from 'styled-components';

export const Box = styled.ul`
  margin-top: 15px;
  padding: 0px;

  width: 400px;

  background-color: aliceblue;

  border-radius: 10px;
`;

export const Contact = styled.li`
  &:not(:first-child) {
    border-top: 1px solid gray;
  }
  padding: 15px 15px 15px 20px;

  width: 365px;

  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: 10px;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

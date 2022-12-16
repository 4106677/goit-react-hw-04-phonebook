import styled from 'styled-components';

export const Form = styled.form`
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Label = styled.label`
  transform: translate(-30px, 14px) scale(0.75);

  height: 0;
`;

export const Input = styled.input`
  display: block;
  width: 382px%;
  margin: 10px 0;
  padding: 10px;
  padding-top: 20px;

  border-radius: 10px;
  border: 1px solid #eee;
  transition: 0.3s border-color;
`;

export const Button = styled.button`
  appearance: none;
  -webkit-appearance: none;
  /* usual styles */
  padding: 10px;

  border: none;
  background-color: #3f51b5;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;

  cursor: pointer;
  width: 100%;
`;

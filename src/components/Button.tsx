import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  onClick?(): void;
}

const Wrapper = styled.button`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.secondary} 100%
  );
  color: white;
  width: 100%;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 5px;
  margin-bottom: 25px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const Button = ({ children, onClick }: Props) => (
  <Wrapper onClick={onClick}>{children}</Wrapper>
);

export default Button;

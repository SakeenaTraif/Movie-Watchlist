import styled from "styled-components";

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: inline;
  width: 40%;
`;

export const AddButtonStyled = styled.button`
  display: inline-block;
  padding: 0.75rem 1rem;
  margin-left: 10px;
  border-radius: 1rem;
  color: #fff;
  background-color: #00af91;
  // float: right;
`;

export const WatchedButtonStyled = styled.button`
  display: inline-block;
  padding: 0.75rem 1rem;
  margin-left: 10px;
  border-radius: 1rem;
  color: #fff;
  background-color: #00d0e2;
  // float: right;
`;

export const DeleteButtonStyled = styled.button`
  display: inline-block;
  padding: 0.75rem 1rem;
  margin-left: 10px;
  border-radius: 1rem;
  color: #fff;
  background-color: #af001e;
  // float: right;
`;

export const InlineButtons = styled.div`
  disply: flex;
  flex-direction: row;
`;

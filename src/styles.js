import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{

  font-family: 'Roboto', sans-serif;
}
`;

export const AppWrapper = styled.div`
  max-width: 800px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
`;

export const WatchListWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  max-width: 300px;
  margin: 30px auto;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  float: left;
`;

export const UnwatchListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 30px auto;

  max-width: 300px;
  margin-right: 50px;
  // min-height: 150px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  float: right;
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: inline;
  width: 70%;
`;

export const InputFormStyled = styled.input`
  text-align: center;
`;

export const AddButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #00af91;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
`;

export const WatchedButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #00d0e2;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: left;
`;

export const UnwatchedButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #7f78d0;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
`;

export const DeleteButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #af001e;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
`;

export const InlineButtons = styled.div`
  disply: flex;
  flex-direction: row;
`;

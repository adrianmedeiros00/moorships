import styled from "styled-components";
import { Colors } from '../../assets/constants/Colors'


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 80%;
  display: flex;
  margin: 3rem auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 30px;
  color: white;
  text-shadow: 0.05em 0.1em 0.3em black;
`;

export const Button = styled.button`
  font-size: 16px;
  height: 34px;
  width: 145px;
  padding: 0 10px;
  border: none;
  outline: none;
  color: white;
  background-color: ${Colors.secondaryColor};
  :hover {
    background-color: rgba(350,30,60);
    cursor: pointer;
  }
`



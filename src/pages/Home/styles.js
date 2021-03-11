import styled from "styled-components";
import { Colors } from '../../assets/constants/Colors'


export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  margin-bottom: 40px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0 2rem 0;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 30px;
  color: white;
  text-shadow: 0.05em 0.1em 0.3em black;
`;

export const Button = styled.button`
  font-size: 16px;
  height: 37px;
  width: 128px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${Colors.secondaryColor};
  color: white;
  background-color: ${Colors.quaternaryColor};
  :hover {
    background-color: rgba(350,30,60);
    cursor: pointer;
  }

`



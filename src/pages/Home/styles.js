import styled from "styled-components";
import { Colors } from '../../assets/constants/Colors'
import backgroundImage from '../../assets/images/docknight.jpg'

export const Container = styled.div`
  height: 100vh;
  background-color: ${Colors.primaryColor};
  background: url(${backgroundImage}) no-repeat right top fixed;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
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
`;

export const Button = styled.button`
  font-size: 16px;
  height: 37px;
  width: 128px;
  padding: 0 10px;
  border-radius: 5px;
  border: solid 0.5px black;
  color: white;
  background-color: ${Colors.quaternaryColor};
  :hover {
    background-color: rgba(350,30,60);
    cursor: pointer;
  }

`



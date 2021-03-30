import styled from "styled-components";
import { Colors } from '../../assets/constants/Colors'


export const Container = styled.div`
  height: 100vh;
<<<<<<< HEAD
  width: 80%;
=======
  width: 100vw;
>>>>>>> d9a01876945a56b4174e65d93d2eba9704d9e53f
  display: flex;
  margin: auto;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 80%;
  display: flex;
<<<<<<< HEAD
  width: 100%;
  flex-direction: row;
  margin: 3rem auto;
=======
  margin: 3rem auto;
  flex-direction: row;
>>>>>>> d9a01876945a56b4174e65d93d2eba9704d9e53f
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
  height: 40px;
  width: 145px;
  padding: 0 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  background-color: ${Colors.secondaryColor};
  :hover {
    background-color: rgba(350,30,60);
    cursor: pointer;
  }
`



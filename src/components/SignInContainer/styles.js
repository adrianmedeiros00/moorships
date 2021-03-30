import styled from "styled-components";
import { Colors } from "../../assets/constants/Colors";

export const Container = styled.div`
  color: white;
  width: 80%;
  max-width: 430px;
  padding: 50px;
  background-color: ${Colors.primaryColor};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-weight: lighter;
<<<<<<< HEAD
  margin: 2.5rem auto;
  border-radius: 20px;
=======
  margin: 3rem auto;
>>>>>>> d9a01876945a56b4174e65d93d2eba9704d9e53f
`;


export const MiniHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`


export const LoginTitle = styled.h1`
  color: white;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
`

export const SignInInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${Colors.terciaryColor};
  margin: 5px 0 20px 0;
  padding: 10px;
  display: block;
  border: none;
  font-size: 16px;
  outline: none;
  color: white;
  border-radius: 5px;
`;

export const Button = styled.button`
  font-size: 17px;
  height: 40px;
  width: 100%;
  margin-top: 15px;
  border-radius: 5px;
  padding: 0 10px;
  border: none;
  outline:none;
  color: white;
  background-color: ${Colors.secondaryColor};
  :hover {
    background-color: rgba(350,30,60);
    cursor: pointer;
  }
`;

export const TextLink = styled.a`
  font-size: 15px;
  display: flex;
  width: 100%;
  margin: 3rem 50% 0 0;
  color: blueviolet;
`;

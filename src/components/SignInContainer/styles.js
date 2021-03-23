import styled from "styled-components";
import { Colors } from "../../assets/constants/Colors";

export const Container = styled.div`
  color: white;
  width: 100%;
  max-width: 400px;
  padding: 50px;
  background-color: ${Colors.primaryColor};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-weight: lighter;
  margin: 3rem auto 5rem auto;
`;

export const LoginTitle = styled.h1`
  color: white;
  margin: 0 auto 35px auto;
  display: flex;
  align-items: center;
`


export const SignInInput = styled.input`
  width: 100%;
  height: 35px;
  background-color: ${Colors.terciaryColor};
  margin: 5px 0 20px 0;
  padding: 10px;
  display: block;
  border: solid 1px black;
  font-size: 16px;
  outline: none;
  color: white;
`;


export const Button = styled.button`
  font-size: 17px;
  height: 40px;
  width: 50%;
  padding: 0 10px;
  border: 2px solid ${Colors.primaryColor};
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
  text-decoration: none;
  color: blueviolet;
`;

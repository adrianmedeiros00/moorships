import styled from "styled-components";
import { Colors } from "../../assets/constants/Colors";

export const Container = styled.div`
  color: black;
  width: 100%;
  max-width: 400px;
  padding: 50px;
  background-color: ${Colors.secondaryColor};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-weight: bold;
  margin: 3rem auto 5rem auto;
`;

export const Title = styled.h1`
  color: black;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`


export const SignInInput = styled.input`
  width: 100%;
  height: 35px;
  background-color: white;
  margin: 5px 0 20px 0;
  padding: 10px;
  display: block;
  border: solid 1px;
  font-size: 16px;
  outline: none;
`;


export const Button = styled.button`
  font-size: 16px;
  height: 37px;
  width: 50%;
  padding: 0 10px;
  border: 1px solid ${Colors.secondaryColor};
  outline:none;
  color: white;
  background-color: ${Colors.quaternaryColor};
  :hover {
    background-color: rgba(350,30,60);
    cursor: pointer;
  }
`;


export const TextLink = styled.a`
  font-size: 14px;
  display: flex;
  margin: 3rem 50% 0 0;
  text-decoration: none;
`;

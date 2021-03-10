import styled from "styled-components";
import { Colors } from "../../assets/constants/Colors";

export const Container = styled.div`
  color: black;
  width: 100%;
  max-width: 400px;
  padding: 50px;
  background-color: ${Colors.secondaryColor};
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  font-size: 17px;
  font-weight: bold;
  margin: 4rem auto 4rem auto;
`;

export const SignInInput = styled.input`
  width: 100%;
  height: 35px;
  background-color: white;
  border-radius: 5px;
  margin: 5px 0 20px 0;
  padding: 10px;
  display: block;
  border: solid 1px;
  font-size: 17px;
`;


export const Button = styled.button`
  font-size: 16px;
  height: 37px;
  width: 100%;
  padding: 0 10px;
  border-radius: 5px;
  border: solid 1px black;
  color: white;
  background-color: ${Colors.quaternaryColor};
  :hover {
    background-color: rgba(350,30,60);
    cursor: pointer;
  }
`;
export const TextLink = styled.a`
  font-size: 14px;
  margin: 30px 0 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

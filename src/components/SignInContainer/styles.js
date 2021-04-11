import styled from "styled-components";
import { Colors } from "../../assets/constants/Colors";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  color: ${Colors.quaternaryColor};
  width: 80%;
  max-width: 450px;
  padding: 50px;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-weight: bold;
  margin: 2.5rem auto;
  border-radius: 20px;
`;


export const MiniHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`


export const LoginTitle = styled.h1`
  color: ${Colors.secondaryColor};
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  font-size: 42px;
`

export const BackArrow = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 0 0 25px 0;
  color: ${Colors.quaternaryColor};
  :hover{
    color: ${Colors.primaryColor};
  }
`



export const SignInInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${Colors.secondaryColor};
  margin: 5px 0 20px 0;
  padding: 10px;
  display: block;
  border: none;
  font-size: 18px;
  outline: none;
  color: ${Colors.background};
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
  background-color: ${Colors.quaternaryColor};
  :hover {
    background-color: ${Colors.primaryColor};
    cursor: pointer;
  }
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  display: flex;
  margin: 3rem 50% 0 0;
  color: ${Colors.quaternaryColor};
  :hover{
  color: ${Colors.primaryColor};
  }
`;

import styled from "styled-components";
import { Colors } from '../../assets/constants/Colors'

export const Container = styled.div`
  height: 100%;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 70px;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0px auto 3rem;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 30px;
  color: white;
`;

export const ShipListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Button = styled.button`
  font-size: 16px;
  height: 40px;
  width: 145px;
  padding: 0 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  background-color:  ${Colors.quaternaryColor};
  :hover {
    background-color:  ${Colors.secondaryColor};
    cursor: pointer;
  }
`



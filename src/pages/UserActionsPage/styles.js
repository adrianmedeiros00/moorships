import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 0 50px;
`

export const WelcomeText = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: lighter;
`

export const ShipsInfoContainer = styled.div`
  width: 100%;
  max-width: 600px;
`


export const UserContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`
export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px;
    width: 100%;
    max-width: 500px;
    background-color: ${Colors.primaryColor};
    font-size: 16px;
    font-weight: bold;
`

export const ActionsTitle = styled.h1`
  color: white;
  display: flex;
  align-items: center;
  margin: 0 auto 20px 0;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  height: 40px;
  width: 100%;
  max-width: 150px;
  padding: 0 10px;
  outline: none;
  border: none;
  color: white;
  background-color: ${Colors.secondaryColor};
  :hover {
    background-color: rgba(350,30,60);
    cursor: pointer;
  }
`
export const SolicitationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 45px auto auto auto;
`

export const SolicitationsTitle = styled.h1`
    color: white;
    display: flex;
    align-items: center;
    margin: auto auto 20px 0;
`

export const SolicitationBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5px;
  padding: 20px;
  background-color: black;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: lighter;
  color: white;
`
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`

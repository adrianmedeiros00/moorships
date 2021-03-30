import styled from 'styled-components'
import { Colors } from '../../assets/constants/Colors'


export const Container = styled.div`
  height: 100vh;
<<<<<<< HEAD
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 100px;
`
=======
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
>>>>>>> d9a01876945a56b4174e65d93d2eba9704d9e53f

export const WelcomeText = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: lighter;
    font-size: 20px;
`

export const ShipsInfoContainer = styled.div`
<<<<<<< HEAD
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 450px;
=======
    display: flex;
    flex-direction: column;
    padding: 60px;
    width: 100%;
    height: 100%;
    max-width: 500px;
    background-color: ${Colors.primaryColor};
    font-size: 16px;
    font-weight: bold;
>>>>>>> d9a01876945a56b4174e65d93d2eba9704d9e53f
`

export const UserContainer = styled.div`
    display: flex;
<<<<<<< HEAD
    padding: 50px;
    align-items: center;
    background-color: ${Colors.primaryColor};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-height: 700px;
    width: 100%;
    border-radius: 20px;
=======
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    max-height: 700px;
    width: 80%;
    margin: 0 auto;
>>>>>>> d9a01876945a56b4174e65d93d2eba9704d9e53f
`
export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
<<<<<<< HEAD
    max-width: 450px;
=======
    max-width: 500px;
    background-color: ${Colors.primaryColor};
>>>>>>> d9a01876945a56b4174e65d93d2eba9704d9e53f
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
  font-size: 15px;
  border-radius: 4px;
  height: 40px;
  width: 144px;
  max-width: 150px;
  padding: 10px;
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
  border-radius: 5px;
`

export const FullTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  border-radius: 10px;
`
export const TableTitle = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`

export const HeaderTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 0; 
`
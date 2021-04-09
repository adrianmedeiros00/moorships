import styled from 'styled-components'


export const ModalContainer = styled.div`
  height: 100vh;
  width:  100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  height: 100vh;
  width: 76%;
  display: flex;
  flex-direction: column;
`


export const Title = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 0; 
`

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`
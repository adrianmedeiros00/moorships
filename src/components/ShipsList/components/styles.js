import styled from 'styled-components'

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  display: flex;
  &:before,
  &:after{
      content: "";
  display: table;
  }
  &:after{
    clear: both;
  }
`

export const InfoContainerRow = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  flex-direction: row;  
`


export const Column = styled.h2`
   float: left;
   font-weight: lighter;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center; 
`

export const HeaderTableTitle = styled.div`
  background-color: blueviolet;
  height: 50px;
  border: 1px solid #1C1C1C;
  width: 100%;
  display: flex;
  color: white; 
  padding: 10px;
  max-width: 1360px;
  margin-bottom: 10px;
`


export const InfoColumn = styled.h3`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  color: black;
  padding:  10px;
  border: 1px solid #1C1C1C;
  max-width: 1360px;
`
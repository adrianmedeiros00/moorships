import styled from 'styled-components'


export const Title = styled.h1`
    color: white;
    text-shadow: 0.05em 0.1em 0.3em black;
    font-size: 50px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;   
    
`

export const Container = styled.div`
    height: 100vh;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`  
export const SignInContainer = styled.div`
    color: black;
    width: 100%;
    max-width: 400px;
    padding: 50px;
    background-color: #DCDCDC;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    font-size: 17px;
    font-weight: bold;
    flex-direction: column;
    margin: 4rem auto 2rem auto;    
`

export const SignInInput = styled.input`
    width: 100%;
    height: 35px;
    background-color: white;
    border-radius: 5px;
    margin: 10px 0 20px 0;
    padding: 10px;
    display: block;
    border: solid 1px;
    font-size: 17px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`


export const Button = styled.button`
    font-size: 16px;
    height: 37px;
    width: 48%; 
    padding: 0 10px;
    border-radius: 5px;
    border: solid 1px black;
    color: white;
    background-color: #000080;
    :hover{
        background-color: #0000CD;
        cursor: pointer;
    }
`
export const TextLink = styled.a`
    font-size: 14px;
    margin: 40px 0 0 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`



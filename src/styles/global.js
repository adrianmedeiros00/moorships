import { createGlobalStyle } from "styled-components";
import backgroundImage from '../assets/images/docknight.jpg'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }


    body{
        font-size: 14px;
        color: #F5F5F5;
        height: 100%;
        //background: url(${backgroundImage}) no-repeat right top fixed;
        background-color: #1C1C1C;
    }
`;

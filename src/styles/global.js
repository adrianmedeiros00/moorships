import { createGlobalStyle } from "styled-components";
import { Colors } from "../assets/constants/Colors";


export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }


    body{
        background-color: ${Colors.background};
    }
`;

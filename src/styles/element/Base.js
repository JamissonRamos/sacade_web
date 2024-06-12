import { createGlobalStyle } from "styled-components";  
import { Theme } from "../../theme";


const Base = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Roboto", sans-serif;
        font-size: 16px;
        color: ${Theme.colors.blue800};
        line-height: 24px;
        letter-spacing: 0.5px;
        font-weight: 400;
        font-style: normal;
    }

`


export default Base;

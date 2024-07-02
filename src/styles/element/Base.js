import { createGlobalStyle } from "styled-components";  


/* 
    -Alterar seletores ou components que vão mudar de acordo a necessidade do projeto;

*/
const Base = createGlobalStyle`

    body, html {
        /* border: 1px solid red; */
        width: 100vw;
        height: 100vh;
    }

    main {
        width: 100%;
        height: 92vh;
        padding: 0 24px 0 264px;
        overflow: auto;
        transition: margin 0.4s; 
        @media (max-width: 768px) {
            padding-left: 84px;
        }
        @media (max-width: 425px) {
            height: 86vh;
            padding: 0;
            margin: 0 ;
        }
    }

`;


export default Base;

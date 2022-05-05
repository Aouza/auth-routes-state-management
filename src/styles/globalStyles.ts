import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
}

button, input{
    border: 0;
    background: none;
    outline: none;
}

button {
    cursor: pointer;
}

`;

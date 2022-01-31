import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
}
button {
    color: ${(props) => props.theme.colors.buttonText};
    background-color: ${(props) => props.theme.colors.main};
    height: 34px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
    border-radius: 50pc;
    outline: none;
    cursor: pointer;
    padding: 0 24px;
}
button:hover {
    background-color: ${(props) => props.theme.colors.active};
  }
label {
    color: ${(props) => props.theme.colors.label};
    font-size: 12px;
    line-height: 20px;
}
ul {
    list-style: none;
}
input, select {
    color: ${(props) => props.theme.colors.input};
    border: 1px solid ${(props) => props.theme.colors.main};
    height: 25px;
    border-radius: 50pc;
    outline: none;
    padding: 0 10px;
    height: 25px;
    width: 100%;
}
input::-webkit-input-placeholder {
    color: "#dbd7d8";
}
input::-moz-placeholder {
    color: "#dbd7d8";
}
input:-moz-placeholder{
    color: "#dbd7d8";
}
input:-ms-input-placeholder{
    color: "#dbd7d8";
}
input::-webkit-input-placeholder{opacity: 0.5; transition: opacity 0.3s ease;}
input::-moz-placeholder{opacity: 0.5; transition: opacity 0.3s ease;}
input:-moz-placeholder{opacity: 0.5; transition: opacity 0.3s ease;}
input:-ms-input-placeholder{opacity: 0.5; transition: opacity 0.3s ease;}
input:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
input:focus::-moz-placeholder{opacity: 0; transition: opacity 0.3s ease;}
input:focus:-moz-placeholder{opacity: 0; transition: opacity 0.3s ease;}
input:focus:-ms-input-placeholder{opacity: 0; transition: opacity 0.3s ease;}
`;

import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context/index.jsx";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? "black" : "white"};
        margin: 0;  
    }
`;

function GlobalStyle() {
    const theme = useContext(ThemeContext);

    return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}

export default GlobalStyle;

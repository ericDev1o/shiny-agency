import { useContext } from "react";
import { ThemeContext } from "../../utils/context/index.jsx";
import { FooterContainer, NightModeButton } from "./style.jsx";

function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Changer de mode : {theme === "light" ? "☀️" : "🌙"}
            </NightModeButton>
        </FooterContainer>
    );
}

export default Footer;

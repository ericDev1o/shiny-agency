import darklogo from "../../assets/dark-logo.png";
import { HeaderWrapper, HeaderLogo, StyledLink } from "./style";

function Header() {
    return (
        <HeaderWrapper>
            <HeaderLogo
                src={darklogo}
                alt="Shiny Agency"
                height={70}
                width={188}
            />
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </nav>
        </HeaderWrapper>
    );
}

export default Header;

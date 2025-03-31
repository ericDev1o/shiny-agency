import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors.js";
import darklogo from "../../assets/dark-logo.png";

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const HeaderLogo = styled.img`
    height: 70px;
    width: 188px;
`;

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 30px 33px;
`;

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

import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors.js";

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

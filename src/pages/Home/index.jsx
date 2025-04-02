import styled from "styled-components";
import { Link } from "react-router-dom";
import homeillustration from "../../assets/home-illustration.svg";
import colors from "../../utils/style/colors.js";
import { StyledLink } from "../../utils/style/Atoms/StyledLink.js";
import { useTheme } from "../../utils/hooks/index.jsx";

const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    ${StyledLink} {
        max-width: 250px;
    }
`;

const StyledTitle = styled.h2`
    font-size: 50px;
    line-height: 161%;
    padding-bottom: 30px;
    max-width: 280px;
`;

const HomeWrapper = styled.main`
    display: flex;
    justify-content: center;
    margin: 0 65px;
`;

const HomeContainer = styled.section`
    display: flex;
    justify-content: space-around;
    margin: 200px 98px;
    background-color: ${colors.backgroundLight};
    padding: 60px 90px;
    max-width: 1200px;
`;

const StyledButtonLink = styled(Link)`
    width: 125px;
    height: 22px;
    display: flex;
    justify-content: center;
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const HomeIllustration = styled.img`
    flex: 1;
`;

function sum(a, b) {
    return a + b;
}

function Home() {
    const { theme } = useTheme();

    return (
        <HomeWrapper>
            <HomeContainer theme={theme}>
                {sum(40, 2)}
                <LeftCol>
                    <StyledTitle theme={theme}>
                        Repérez vos besoins, on s'occupe du reste, avec les
                        meilleurs talents
                    </StyledTitle>
                    <StyledButtonLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledButtonLink>
                </LeftCol>
                <HomeIllustration src={homeillustration} />
            </HomeContainer>
        </HomeWrapper>
    );
}

export default Home;

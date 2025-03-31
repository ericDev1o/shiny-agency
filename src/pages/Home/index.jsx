import styled from "styled-components";
import { Link } from "react-router-dom";
import homeillustration from "../../assets/home-illustration.svg";
import colors from "../../utils/style/colors.js";

const HomeWrapper = styled.main`
    display: flex;
    margin: 0 65px;
`;

const HomeSectionTitle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 200px 98px;
`;

const HomeH1 = styled.h1`
    font-size: 50px;
    line-height: 161%;
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

const HomeIllustration = styled.img``;

function Home() {
    return (
        <HomeWrapper>
            <HomeSectionTitle>
                <HomeH1>
                    Repérez vos besoins, on s'occupe du reste, avec les
                    meilleurs talents
                </HomeH1>
                <StyledButtonLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledButtonLink>
            </HomeSectionTitle>
            <HomeIllustration src={homeillustration} />
        </HomeWrapper>
    );
}

export default Home;

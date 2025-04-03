import homeillustration from "../../assets/home-illustration.svg";
import { useTheme } from "../../utils/hooks/index.jsx";
import {
    HomeWrapper,
    HomeContainer,
    HomeIllustration,
    LeftCol,
    StyledTitle,
    StyledButtonLink,
} from "./style.jsx";

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

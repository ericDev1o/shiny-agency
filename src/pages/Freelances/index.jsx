import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card/";
import styled from "styled-components";
import colors from "../../utils/style/colors.js";
import { Loader, LoaderWrapper } from "../../utils/style/Atoms/Loader.js";
import { useFetch, useTheme } from "../../utils/hooks/index.jsx";

const freelanceProfiles = [
    {
        name: "Jane Doe",
        job: "DevOps",
        picture: DefaultPicture,
    },
    {
        name: "John Doe",
        job: "Développeur frontend",
        picture: DefaultPicture,
    },
    {
        name: "Jeanne Biche",
        job: "Développeuse fullstack",
        picture: DefaultPicture,
    },
];

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PageTitle = styled.h1`
    font-size: 30px;
    text-align: center;
    padding-bottom: 30px;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
`;

const PageSubtitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
`;

const CardsContainer = styled.div`
    display: grid;
    margin: 114px 0;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {
    const { theme } = useTheme();
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/freelances`
    );

    const freelancersList = data?.freelancersList;

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <MainWrapper>
            <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
            <PageSubtitle theme={theme}>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader theme={theme} />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {freelancersList.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            title={profile.name}
                            picture={profile.picture}
                        />
                    ))}
                </CardsContainer>
            )}
        </MainWrapper>
    );
}

export default Freelances;

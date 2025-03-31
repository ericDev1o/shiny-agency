import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card/";
import styled from "styled-components";

const freelanceProfiles = [
    {
        name: "Jane Doe",
        jobTitle: "DevOps",
        picture: DefaultPicture,
    },
    {
        name: "John Doe",
        jobTitle: "Développeur frontend",
        picture: DefaultPicture,
    },
    {
        name: "Jeanne Biche",
        jobTitle: "Développeuse fullstack",
        picture: DefaultPicture,
    },
];

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FreelancesH1 = styled.h1`
    font-size: 30px;
`;

const FreelancesH2 = styled.h2`
    font-size: 20px;
    font-weight: 700;
`;

const CardsContainer = styled.div`
    display: grid;
    margin: 114px 0;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {
    return (
        <MainWrapper>
            <FreelancesH1>Trouvez votre prestataire</FreelancesH1>
            <FreelancesH2>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </FreelancesH2>
            <CardsContainer>
                {freelanceProfiles.map((profile, index, picture) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                        picture={profile.picture}
                    />
                ))}
            </CardsContainer>
        </MainWrapper>
    );
}

export default Freelances;

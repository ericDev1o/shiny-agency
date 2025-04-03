import Card from "../../components/Card/";
import { Loader, LoaderWrapper } from "../../utils/style/Atoms/Loader.js";
import { useFetch, useTheme } from "../../utils/hooks/index.jsx";
import {
    MainWrapper,
    PageTitle,
    PageSubtitle,
    CardsContainer,
} from "./style.jsx";

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
                    <Loader theme={theme} data-testid="loader" />
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

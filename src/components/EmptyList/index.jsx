import EmptyIllustration from "../../assets/empty.svg";
import { useTheme } from "../../utils/hooks";
import { Container, Title, SubTitle, Illustration } from "./style";

function EmptyList() {
    const { theme } = useTheme();

    return (
        <Container theme={theme}>
            <Title theme={theme}>Dommage...</Title>
            <Illustration src={EmptyIllustration} />
            <SubTitle theme={theme}>
                Il semblerait que vous n’ayez besoin d’aucune compétence
            </SubTitle>
        </Container>
    );
}

export default EmptyList;

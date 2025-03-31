import styled from "styled-components";
import error404 from "../../assets/404.svg";

const MainError = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ErrorH1 = styled.h1`
    font-size: 31px;
`;

const ErrorH2 = styled.h2`
    font-size: 31px;
`;

const Img404 = styled.img`
    margin: 71px; 0
`;

function Error() {
    return (
        <MainError>
            <ErrorH1>Oups...</ErrorH1>
            <Img404 src={error404} />
            <ErrorH2>Il semblerait qu'il y ait un problème</ErrorH2>
        </MainError>
    );
}

export default Error;

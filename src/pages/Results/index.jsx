import { useContext } from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors.js";
import { SurveyContext } from "../../utils/context/index.jsx";
import { useFetch, useTheme } from "../../utils/hooks/index.jsx";
import { Loader, LoaderWrapper } from "../../utils/style/Atoms/Loader.js";
import { StyledLink } from "../../utils/style/Atoms/StyledLink.js";

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${({ theme }) =>
        theme === "light" ? colors.backgroundLight : colors.backgroundDark};
`;

const ResultsTitle = styled.h2`
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
    font-weight: bold;
    font-size: 28px;
    max-width: 60%;
    text-align: center;
    & > span {
        padding-left: 10px;
    }
`;

const JobTitle = styled.span`
    color: ${({ theme }) =>
        theme === "light" ? colors.primary : colors.backgroundLight};
    text-transform: capitalize;
`;

const JobDescription = styled.div`
    font-size: 18px;
    & > p {
        color: ${({ theme }) =>
            theme === "light" ? colors.secondary : "#ffffff"};
        margin-block-start: 5px;
    }
    & > span {
        font-size: 20px;
    }
`;

const DescriptionWrapper = styled.div`
    padding: 60px;
`;

function formatQueryParams(answers) {
    const answerNumbers = Object.keys(answers);

    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstAnswer = index === 0;
        const separator = isFirstAnswer ? "" : "&";

        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
    }, "");
}

export function formatJobTitle(title, listLength, index) {
    if (index === listLength - 1) return title;
    return `${title}`;
}

function Results() {
    const { theme } = useTheme();
    const { results } = useContext(SurveyContext);
    const queryParams = formatQueryParams(results);
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/results?${queryParams}`
    );

    if (error) return <span>Il y a un problème</span>;

    const resultsData = data?.resultsData;

    return isLoading ? (
        <LoaderWrapper>
            <Loader />
        </LoaderWrapper>
    ) : (
        <ResultsContainer theme={theme}>
            <ResultsTitle theme={theme}>
                Les compétences dont vous avez besoin:
                {resultsData &&
                    resultsData.map((result, index) => (
                        <JobTitle
                            key={`result-title-${index}-${result.title}`}
                            theme={theme}
                        >
                            formatJobTitle(result.title, resultsData.length,
                            index);
                        </JobTitle>
                    ))}
            </ResultsTitle>
            <StyledLink $isFullLink to="/freelances">
                Découvrez nos profils
            </StyledLink>
            <DescriptionWrapper>
                {resultsData &&
                    resultsData.map((result, index) => (
                        <JobDescription
                            theme={theme}
                            key={`result-detail-${index}-${result.title}`}
                        >
                            <JobTitle theme={theme}>{result.title}</JobTitle>
                            <p>{result.description}</p>
                        </JobDescription>
                    ))}
            </DescriptionWrapper>
        </ResultsContainer>
    );
}

export default Results;

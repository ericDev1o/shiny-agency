import { useContext } from "react";
import { SurveyContext } from "../../utils/context/index.jsx";
import { useFetch, useTheme } from "../../utils/hooks/index.jsx";
import { Loader, LoaderWrapper } from "../../utils/style/Atoms/Loader.js";
import { StyledLink } from "../../utils/style/Atoms/StyledLink.js";
import {
    ResultsContainer,
    ResultsTitle,
    JobTitle,
    DescriptionWrapper,
    JobDescription,
} from "./style.jsx";

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
            <Loader data-testid="loader" />
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
                            <JobTitle theme={theme} data-testid="job-title">
                                {result.title}
                            </JobTitle>
                            <p data-testid="job-description">
                                {result.description}
                            </p>
                        </JobDescription>
                    ))}
            </DescriptionWrapper>
        </ResultsContainer>
    );
}

export default Results;

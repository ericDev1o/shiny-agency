import { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors.js";
import Loader from "../../utils/style/Atoms/Loader.js";
import { SurveyContext } from "../../utils/context/index.jsx";
import { useFetch, useTheme } from "../../utils/hooks/index.jsx";

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
    margin: 30px;
`;

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: black;
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`;

const ReplyBox = styled.button`
    border: none;
    height: 100px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    cursor: pointer;
    box-shadow: ${(props) =>
        props.$isselected ? `0px 0px 0px 2px ${colors.primary} inset` : "none"};
    &:first-child {
        margin-right: 15px;
    }
    &:last-of-type {
        margin-left: 15px;
    }
`;

const ReplyWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber =
        questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;
    const { results, saveAnswers } = useContext(SurveyContext);
    const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
    const { surveyData } = data;
    const { theme } = useTheme();

    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer });
    }

    function next() {
        if (questionNumber < 10 && questionNumber >= 1)
            return (
                <Link to={`/survey/${Number(questionNumber) + 1}`}>
                    Question suivante
                </Link>
            );
        else return <Link to="/results">Résultats</Link>;
    }

    function previous() {
        if (questionNumber > 1 && questionNumber <= 10)
            return (
                <Link to={`/survey/${questionNumber - 1}`}>
                    Question précédente
                </Link>
            );
        else if (questionNumber === 1)
            return <Link to="/survey/1">Question précédente</Link>;
    }

    if (error) {
        return <span>Il y a un problème</span>;
    }

    return (
        <SurveyContainer>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumber}</h2>
            <Link to="client">Questionnaire client</Link>
            <Link to="freelance">Questionnaire freelance</Link>
            {previous()}
            {next()}
            <Outlet />
            <QuestionTitle theme={theme}>
                Question {questionNumber}
            </QuestionTitle>
            {isLoading ? (
                <Loader />
            ) : (
                <QuestionContent theme={theme}>
                    {surveyData && surveyData[questionNumber]}
                </QuestionContent>
            )}
            <ReplyWrapper>
                <ReplyBox
                    onClick={() => saveReply(true)}
                    isselected={results[questionNumber] === true}
                >
                    Oui
                </ReplyBox>
                <ReplyBox
                    onClick={() => saveReply(false)}
                    isselected={results[questionNumber] === false}
                >
                    Non
                </ReplyBox>
            </ReplyWrapper>
            <LinkWrapper theme={theme}>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData && surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    );
}

export default Survey;

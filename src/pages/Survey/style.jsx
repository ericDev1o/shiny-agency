import styled from "styled-components";
import colors from "../../utils/style/colors.js";

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

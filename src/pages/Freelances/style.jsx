import styled from "styled-components";
import colors from "../../utils/style/colors.js";
import DefaultPicture from "../../assets/profile.png";

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

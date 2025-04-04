import styled from "styled-components";
import colors from "../../utils/style/colors";

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`;

const CardCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin: 32px; 0
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;

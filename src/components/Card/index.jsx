import PropTypes from "prop-types";
import DefaultPicture from "../../assets/photo.png";
import { CardWrapper, CardLabel, CardImage, CardCenter } from "./style";

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 15,
                }}
            >
                <CardLabel>{label}</CardLabel>
                <CardCenter>
                    <CardImage
                        src={picture}
                        alt="freelance"
                        height={80}
                        width={80}
                    />
                    <span>{title}</span>
                </CardCenter>
            </div>
        </CardWrapper>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    title: "dev",
    label: "Name",
    picture: DefaultPicture,
};

export default Card;

import { ThemeContext } from "../../utils/context";
import {
    ProfileWrapper,
    Picture,
    ProfileDetails,
    TitleWrapper,
    Title,
    Location,
    JobTitle,
    SkillsWrapper,
    Skill,
    Availability,
    Price,
} from "./style";
import { useParams, useState, useEffect } from "../../utils/hooks";

function Profile() {
    const { id: queryId } = useParams();
    const [profileData, setProfileData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8000/freelance?id=${queryId}`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                setProfileData(jsonResponse?.freelanceData);
            });
    }, [queryId]);

    const { picture, name, location, tjm, job, skills, available, id } =
        profileData;

    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <ProfileWrapper theme={theme}>
                    <Picture
                        src={picture}
                        alt={name}
                        height={150}
                        width={150}
                    />
                    <ProfileDetails theme={theme}>
                        <TitleWrapper>
                            <Title>{name}</Title>
                            <Location>{location}</Location>
                        </TitleWrapper>
                        <JobTitle>{job}</JobTitle>
                        <SkillsWrapper>
                            {skills &&
                                skills.map((skill) => (
                                    <Skill
                                        key={`skill-${skill}-${id}`}
                                        theme={theme}
                                    >
                                        {skill}
                                    </Skill>
                                ))}
                        </SkillsWrapper>
                        <Availability available={available}>
                            {available
                                ? "Disponible maintenant"
                                : "Indisponible"}
                        </Availability>
                        <Price>{tjm} € / jour</Price>
                    </ProfileDetails>
                </ProfileWrapper>
            )}
        </ThemeContext.Consumer>
    );
}

export default Profile;

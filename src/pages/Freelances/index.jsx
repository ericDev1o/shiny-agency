import DefaultPicture from "../../assets/photo.png";
import Card from "../../components/Card/";

const freelanceProfiles = [
    {
        name: "Jane Doe",
        jobTitle: "DevOps",
        picture: DefaultPicture,
    },
    {
        name: "John Doe",
        jobTitle: "Développeur frontend",
        picture: DefaultPicture,
    },
    {
        name: "Jeanne Biche",
        jobTitle: "Développeuse fullstack",
        picture: DefaultPicture,
    },
];

function Freelances() {
    return (
        <div>
            <h1>Freelances 👩·💻👨·💻👩·💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    );
}

export default Freelances;

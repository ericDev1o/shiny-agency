import { Outlet, Link } from "react-router";
import { useParams } from "react-router-dom";

function Survey() {
    const { questionNumber } = useParams();

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

    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumber}</h2>
            <Link to="client">Questionnaire client</Link>
            <Link to="freelance">Questionnaire freelance</Link>
            {previous()}
            {next()}
            <Outlet />
        </div>
    );
}

export default Survey;

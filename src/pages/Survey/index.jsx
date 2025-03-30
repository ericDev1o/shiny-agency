import { Outlet, Link } from "react-router";

function Survey() {
    return (
        <div>
            <h1>Questionnaire</h1>
            <Link to="client">Questionnaire client</Link>
            <Link to="freelance">Questionnaire freelance</Link>
            <Outlet />
        </div>
    );
}

export default Survey;

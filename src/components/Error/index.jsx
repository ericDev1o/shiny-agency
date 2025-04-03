import error404 from "../../assets/404.svg";
import { MainError, ErrorH1, ErrorH2, Img404 } from "./style";

function Error() {
    return (
        <MainError>
            <ErrorH1>Oups...</ErrorH1>
            <Img404 src={error404} />
            <ErrorH2>Il semblerait qu'il y ait un problème</ErrorH2>
        </MainError>
    );
}

export default Error;

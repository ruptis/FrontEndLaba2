import {Background} from "../components/Background";
import background from "../assets/images/background.svg";
import DirectorComponent from "../components/DirectorPage/DirectorComponent";
import IDirector from "../models";

interface DirectorPageProps {
    director: IDirector;
}
export function DirectorPage(props: DirectorPageProps) {
    return (
        <Background background={background}>
            <DirectorComponent director={props.director}/>
        </Background>
    );
}
export default DirectorPage;
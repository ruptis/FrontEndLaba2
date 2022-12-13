import {Background} from "../components/Background";
import background from "../assets/images/background.svg";
import DirectorComponent from "../components/DirectorPage/DirectorComponent";
import IDirector from "../models";
import MapComponent from "../components/DirectorPage/MapComponent";
import TimelineComponent from "../components/DirectorPage/TimelineComponent";

interface DirectorPageProps {
    director: IDirector;
}
export function DirectorPage(props: DirectorPageProps) {
    return (
        <Background background={background}>
            <DirectorComponent director={props.director}/>
            <MapComponent width ='1080' height = '768' x='53.7169' y='27.9776'/>
            <TimelineComponent timeline={props.director.timeline}/>
        </Background>
    );
}
export default DirectorPage;
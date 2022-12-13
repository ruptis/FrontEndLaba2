import {Background} from "../components/Background";
import background from "../assets/images/background.svg";
import DirectorComponent from "../components/DirectorPage/DirectorComponent";
import IDirector from "../models";
import MapComponent from "../components/DirectorPage/MapComponent";
import VideoComponent from "../components/DirectorPage/VideoComponent";

interface DirectorPageProps {
    director: IDirector;
}
export function DirectorPage(props: DirectorPageProps) {
    return (
        <Background background={background}>
            <DirectorComponent director={props.director}/>
            <MapComponent width ='1080' height = '768' x='53.7169' y='27.9776'/>
            <VideoComponent width='1080' height = '768' videoId='RYDIExW5c9A'/>
        </Background>
    );
}
export default DirectorPage;
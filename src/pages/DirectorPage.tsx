import {Background} from "../components/Background";
import background from "../assets/images/background.svg";
import DirectorComponent from "../components/DirectorPage/DirectorComponent";
import IDirector from "../models";
import MapComponent from "../components/DirectorPage/MapComponent";
import TimelineComponent from "../components/DirectorPage/TimelineComponent";
import CarouselComponent from "../components/DirectorPage/CarouselComponent";

interface DirectorPageProps {
    director: IDirector;
}
export function DirectorPage(props: DirectorPageProps) {
    return (
        <Background background={background}>
            <DirectorComponent director={props.director}/>
            <TimelineComponent timeline={props.director.timeline}/>
            <CarouselComponent images={props.director.images}/>
            <MapComponent lat={props.director.location.lat} lng={props.director.location.lng}/>
        </Background>
    );
}
export default DirectorPage;
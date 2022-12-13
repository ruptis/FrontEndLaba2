import {Rectangle} from "../Rectangle";
interface VideoComponentProps {
    videoId: string;
}
export default function VideoComponent(props: VideoComponentProps) {
    return (
        <Rectangle blur={false} width={'1300px'} height={'860px'} padding={'35px'} margin={'50px'} minHeight={'500px'} color={'neutral.main'}>
            <iframe width="100%" height="100%" style={{borderRadius: '20px'}} src={`https://www.youtube.com/embed/${props.videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Rectangle>
    );
}
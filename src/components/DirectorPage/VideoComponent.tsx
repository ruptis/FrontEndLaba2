import YouTube from "react-youtube";


export default function VideoComponent(props: any)
{
    const windowStyle = 
    {
        width: props.width,
        height: props.height,
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
    }
   
    return <YouTube style={windowStyle} videoId={(props.videoId)}/>
}
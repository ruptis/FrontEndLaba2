import {Rectangle} from "../Rectangle";
import {Typography} from "@mui/material";
import IDirector from "../../models";
import {ArrowCircleRightOutlined} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

interface SearchResultProps {
    director: IDirector;
}
export function SearchResult(props: SearchResultProps) {
    return (
        <Rectangle blur={false} width={'80%'} height={'100px'} direction={'row'} margin={'15px'} color={'primary.main'}>
            <Typography sx={
                {
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: 'primary.contrastText',
                    textAlign: 'left',
                    flexGrow: 1,
                    marginLeft: '20px',
                }
            }>
                {props.director.name}
            </Typography>
            <Divider orientation="vertical" flexItem sx={{height: '100%', backgroundColor: 'primary.contrastText', marginRight: '10px'}}/>
            <IconButton sx={{
                width: '100px',
                height: '100px',
            }}>
                <ArrowCircleRightOutlined sx={
                    {
                        color: 'primary.contrastText',
                        fontSize: '100px',
                    }
                }/>
            </IconButton>
        </Rectangle>
    );
}
import DividerImage from '../../assets/images/titlecomponent_movieDivider5.png';
import { styled } from '@mui/material/styles';
import {Paper, Typography} from "@mui/material";

const TitleRectangle = styled(Paper)(({ theme }) => ({
    width: '821px',
    height: '329px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(131, 80, 79, 0.55)',
    boxSizing: 'border-box',
    borderRadius: '66px',
    backdropFilter: `blur(10px)`,
    WebkitBackdropFilter: `blur(10px)`,
    boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.12)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: 'auto',
        borderRadius: '0px',
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    color: 'rgba(239, 187, 190, 1)',
    fontStyle: 'normal',
    fontFamily: 'Playfair Display',
    fontWeight: '800',
    fontSize: `85px`,
    letterSpacing: '0px',
    textDecoration: 'none',
    textTransform: 'none',
    width: '600px',
    height: '48px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: 'auto',
        fontSize: '32px',
    },
}));

const Divider: any = styled("img")({
  height: `21px`,
  width: `666px`,
});
 
export function TitleComponent(props: any) {
    return (
        <TitleRectangle elevation={0} className={props.className} >
            <Title>
              {'Кинорежиссёры Беларуси'}
            </Title>
            <Divider src={DividerImage} />
        </TitleRectangle>
  );
}

export default TitleComponent;

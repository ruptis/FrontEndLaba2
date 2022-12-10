import { styled } from '@mui/material/styles';
import {Button} from "@mui/material";

const SearchButton = styled(Button)({
    width: `330px`,
    height: `78px`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `rgba(36, 14, 13, 1)`,
    border: `1px solid rgba(239, 187, 190, 1)`,
    boxSizing: `border-box`,
    borderRadius: `17px`,
    fontStyle: `normal`,
    fontFamily: `Playfair Display`,
    fontWeight: `800`,
    fontSize: `24px`,
    lineHeight: `48px`,
    letterSpacing: `0px`,
    color: `rgba(239, 187, 190, 1)`,
    textTransform: `none`,
});
function ButtonComponent(props: any) {
    return (
    <SearchButton className={props.className} >
        {'Перейти к поиску'}
    </SearchButton>
  );
}
export default ButtonComponent;

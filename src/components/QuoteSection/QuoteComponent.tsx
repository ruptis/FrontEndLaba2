import {Rectangle} from "../Rectangle";
import {useTheme} from "@mui/material";

interface QuoteComponentProps {
    quote: string;
    author: string;
}
export function QuoteComponent(props: QuoteComponentProps) {
    const theme = useTheme();

    return (
        <Rectangle color={theme.palette.background.paper} width="1300px" height="700px">
            {props.quote}
            {props.author}
        </Rectangle>
    );
}
export default QuoteComponent;
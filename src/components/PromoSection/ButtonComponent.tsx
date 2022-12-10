import {Button} from "@mui/material";

interface ButtonComponentProps {
    text: string;
    onClick?: () => void;
}

function ButtonComponent(props: ButtonComponentProps) {

    return (
        <Button
            sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                borderRadius: '20px',
                width: '330px',
                height: '80px',
                fontSize: '24px',
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
            variant="contained"
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    );
}
export default ButtonComponent;

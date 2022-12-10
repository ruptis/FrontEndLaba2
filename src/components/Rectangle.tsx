import {Paper} from "@mui/material";
import {ReactNode} from "react";

interface PromoSectionProps {
    children: ReactNode;
    color?: string;
    width?: string;
    height?: string;
}
export function Rectangle(props: PromoSectionProps) {
    return (
        <Paper
            sx={{
                backgroundColor: props.color,
                width: props.width,
                height: props.height,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                borderRadius: '66px',
                backdropFilter: `blur(10px)`,
                WebkitBackdropFilter: `blur(10px)`,
                boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                margin: '50px',
                textAlign: 'center',
            }}>
            {props.children}
        </Paper>
    );
}
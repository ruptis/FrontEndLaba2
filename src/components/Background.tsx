import {ReactNode} from "react";
import {Container, Paper} from "@mui/material";

interface BackgroundProps {
    children: ReactNode;
    background: string;
}
export function Background(props: BackgroundProps) {
    return (
        <Paper
            sx={{
                backgroundImage: `url(${props.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {props.children}
            </Container>
        </Paper>
    );
}
import {Paper} from "@mui/material";
import {ReactNode} from "react";

interface PromoSectionProps {
    children: ReactNode;
    color?: string;
    width?: string;
    height?: string;
    blur: boolean;
    direction?: 'row' | 'column';
    align?: 'center' | 'start' | 'end';
    justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
    margin?: string;
    padding?: string;

}
export function Rectangle({children, color, width, height, blur = false, direction = 'column', align = 'center', justify = 'center', margin = '0px', padding = '0px'}: PromoSectionProps) {
    return (
        <Paper
            sx={{
                backgroundColor: color,
                height: height,
                width: { lg: width, sm: '90vw'},
                display: 'flex',
                flexDirection: direction,
                alignItems: align,
                justifyContent: justify,
                boxSizing: 'border-box',
                borderRadius: { lg: '66px', md: '50px'},
                boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                margin: margin,
                padding: padding,
                textAlign: 'center',
                backdropFilter: blur ? `blur(10px)` : `none`,
                WebkitBackdropFilter: blur ? `blur(10px)` : `none`,
            }}>
            {children}
        </Paper>
    );
}
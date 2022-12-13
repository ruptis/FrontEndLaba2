import {Paper, useTheme} from "@mui/material";
import {ReactNode} from "react";

interface PromoSectionProps {
    children: ReactNode;
    color?: string;
    width?: string;
    height?: string;
    blur: boolean;
    direction?: 'row' | 'column' | 'row-column';
    align?: 'center' | 'start' | 'end';
    justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
    margin?: string;
    padding?: string;
    minHeight?: string;
    style?: any;
}
export function Rectangle({children, color, width, height, blur = false, direction = 'column', align = 'center', justify = 'center', margin = '0px', padding = '0px', minHeight = 'auto', style}: PromoSectionProps) {
    const theme = useTheme();
    return (
        <Paper
            sx={{
                backgroundColor: color,
                height: height,
                width: { lg: width, sm: '90vw', xs: '90vw' },
                minHeight: minHeight,
                display: 'flex',
                flexDirection: direction === 'row-column' ? 'row' : direction,
                alignItems: align,
                justifyContent: justify,
                boxSizing: 'border-box',
                borderRadius: { lg: '66px', md: '50px', sm: '30px', xs: '30px' },
                boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                margin: margin,
                padding: padding,
                textAlign: 'center',
                backdropFilter: blur ? `blur(10px)` : `none`,
                WebkitBackdropFilter: blur ? `blur(10px)` : `none`,
                [theme.breakpoints.down('md')]: {
                    flexDirection: direction === 'row-column' ? 'column' : direction,
                    height: minHeight === 'auto' ? 'auto' : minHeight,
                },
                [theme.breakpoints.down('sm')]: {
                    flexDirection: direction === 'row-column' ? 'column' : direction,
                    height: minHeight === 'auto' ? 'auto' : minHeight,
                    padding: '30px 0px',
                },
                ...style,
            }}>
            {children}
        </Paper>
    );
}
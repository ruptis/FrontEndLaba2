import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {useState} from "react";
import {Rectangle} from "../Rectangle";
import IconButton from "@mui/material/IconButton";
import {ArrowBackIosNewOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface CarouselComponentProps {
    images: string[];
}
export default function CarouselComponent({ images }: CarouselComponentProps) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: any) => {
        setActiveStep(step);
    };

    return (
        <Rectangle blur={false} width={'1300px'} height={'860px'} style={{paddingBottom: '20px', paddingTop: '30px', justifyContent: 'center', alignItems: 'center'}} color={'neutral.contrastText'}>
            <Box sx={{width: '100%', height: '90%'}}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={index}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 710,
                                        maxWidth: 1250,
                                        overflow: 'hidden',
                                        width: '100%',
                                        borderRadius: '20px',
                                        objectFit: 'cover',
                                    }}
                                    src={step}
                                    alt={index.toString()}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    sx={{ bgcolor: 'transparent', color: 'primary.contrastText' }}
                    steps={maxSteps}
                    position='static'
                    variant='dots'
                    activeStep={activeStep}
                    nextButton={
                    <IconButton color={'secondary'} size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        {theme.direction === 'rtl' ? <ArrowBackIosNewOutlined /> : <ArrowForwardIosOutlined />}
                    </IconButton>}
                    backButton={
                    <IconButton color={'secondary'} size="large" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <ArrowForwardIosOutlined /> : <ArrowBackIosNewOutlined />}
                    </IconButton>}
                />
            </Box>
        </Rectangle>
    );
}
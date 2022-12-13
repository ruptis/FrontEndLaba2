import {ITimeline} from "../../models";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {Typography, useTheme} from "@mui/material";
import TimelineArrowComponent from "./TimelineArrowComponent";
import Box from "@mui/material/Box";

interface TimelineComponentProps {
    timeline: ITimeline[];
}

export function TimelineComponent(props: TimelineComponentProps) {
    const theme = useTheme();

    const timelineItem = (color: "first" | "second", title: string, text: string, year: string) => {
        return (
            <TimelineItem>
                <TimelineOppositeContent sx={
                    {
                        transform: 'translateY(39.7%)',
                        marginRight: '55px',
                        [theme.breakpoints.down('lg')]: {
                            marginRight: '30px',
                        },
                        [theme.breakpoints.down('md')]: {
                            display: 'none',
                        },
                        [theme.breakpoints.down('sm')]: {
                            display: 'none',
                        }
                    }
                }>
                    <TimelineArrowComponent color={color} year={year}/>
                </TimelineOppositeContent>
                <TimelineOppositeContent sx={
                    {
                        transform: 'translateY(45%)',
                        marginRight: '30px',
                        [theme.breakpoints.up('md')]: {
                            display: 'none',
                        },
                        [theme.breakpoints.down('sm')]: {
                            transform: 'translateY(44%)',
                            marginRight: '0px',
                        }
                    }}>
                    <Typography sx={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        color: 'neutral.contrastText',
                        textAlign: 'center',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '20px',
                        }
                    }}>
                        {year}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color={'primary'} variant={'outlined'} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Box sx={
                                {
                                    height: '550px',
                                    width: '810px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    backgroundColor: color === 'second' ? 'neutral.main' : 'neutral.contrastText',
                                    borderRadius: '66px',
                                    marginLeft: '80px',
                                    padding: '50px',
                                    [theme.breakpoints.down('lg')]: {
                                        width: '500px',
                                        marginLeft: '40px',
                                    },
                                    [theme.breakpoints.down('md')]: {
                                        width: '400px',
                                        marginLeft: '20px',
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        borderRadius: '25px',
                                        width: '180px',
                                        marginLeft: '0px',
                                        height: 'auto',
                                        padding: '20px',
                                    }
                                }
                    }>
                        <Typography variant="h2" color={color === 'second' ? 'neutral.contrastText' : 'neutral.main'} textAlign={'left'} width={'100%'} mb={'30px'}
                        sx={
                            {
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '20px',
                                }
                            }
                        }>
                            {title}
                        </Typography>
                        <Typography variant="h5" color={color === 'second' ? 'neutral.contrastText' : 'neutral.main'} textAlign={'left'} width={'100%'}
                        sx={
                            {
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '14px',
                                }
                            }
                        }>
                            {text}
                        </Typography>
                    </Box>
                </TimelineContent>
            </TimelineItem>
        );
    }

    return (
        <Timeline>
            {props.timeline.map((item, index) => {
                return timelineItem(index % 2 === 0 ? 'first' : 'second', item.title, item.description, (item.year).toString());
            })}
        </Timeline>
    );
}
export default TimelineComponent;
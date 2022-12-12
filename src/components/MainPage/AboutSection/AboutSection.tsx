import AboutImage from "../../../assets/images/aboutImage.png"
import {AboutComponent} from "./AboutComponent";
import {useTheme} from "@mui/material";
import Box from "@mui/material/Box";

export function AboutSection() {
        const theme = useTheme();

        return (
            <Box id={"info"}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    [theme.breakpoints.down('md')]: {
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}>
                <Box
                    sx={{
                        width: '47%',
                        height: '100%',
                        marginRight: '90px',
                        [theme.breakpoints.down('md')]: {
                            display: 'none',
                        },
                    }}>
                    <img src={AboutImage} alt="aboutImage"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}/>
                </Box>
                <AboutComponent text="Какой-то текст" title="Информация о портале"/>
            </Box>
        );
}
export default AboutSection;
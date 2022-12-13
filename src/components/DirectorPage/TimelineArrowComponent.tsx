import React from 'react';
import FirstTapeImage from '../../assets/images/firstTape.png';
import FirstArrowImage from '../../assets/images/firstArrow.png';
import SecondTapeImage from '../../assets/images/secondTape.png';
import SecondArrowImage from '../../assets/images/secondArrow.png';
import { styled } from '@mui/material/styles';

 
const TimelineArrow = styled("div")({
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `281px`,  
  height: `105px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,
  boxSizing: `border-box`,
});

const Arrow = styled("img")({
  height: `60px`,
  width: `281px`,
  position: `absolute`,
  left: `0px`,
  top: `23px`,
});
  
const TopLine = styled("img")({
  height: `23px`,
  width: `235px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});
  
const BottomLine = styled("img")({
  height: `23px`,  
  width: `235px`,  
  position: `absolute`,  
  left: `1px`,  
  top: `82px`,  
});
  
const PointerText = styled("div")(({color}) => ({
  textAlign: `center`,  
  whiteSpace: `pre-wrap`,  
  color: color === 'first' ? `#240E0D` : `#EFBBBE`,
  fontStyle: `normal`,  
  fontFamily: `Playfair Display`,  
  fontWeight: `700`,  
  fontSize: `28px`,  
  letterSpacing: `0.15px`,
  textDecoration: `none`,  
  lineHeight: `150%`,  
  textTransform: `none`,  
  position: `absolute`,  
  left: `86px`,  
  top: `31px`,  
}));

interface TimelineArrowComponentProps {
    year: string;
    color: 'first' | 'second';
}
 
function TimelineArrowComponent(props: TimelineArrowComponentProps) {

    return (
    <TimelineArrow>
      <TopLine  src={props.color === 'first' ? FirstTapeImage : SecondTapeImage} alt={"Subtract"}/>
      <Arrow  src={props.color === 'first' ? FirstArrowImage : SecondArrowImage} alt={"Subtract"}/>
      <BottomLine  src={props.color === 'first' ? FirstTapeImage : SecondTapeImage} alt={"Subtract"}/>
      <PointerText color={props.color}>
        {props.year} год
      </PointerText>
    </TimelineArrow>
  );
}

export default TimelineArrowComponent;

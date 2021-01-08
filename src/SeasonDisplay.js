import React from 'react';
import './SeasonDisplay.css';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import FlareIcon from '@material-ui/icons/Flare';

const getSeason = (lat, month) =>{
 if(month > 2 && month < 9){
     return lat > 0 ? 'summer' : 'winter';
 }
 else{
     return lat > 0 ? 'winter' : 'summer';
 }
}

const seasonConfig ={
    summer:{
        text:"SUMMER SEASON",
        iconName:<FlareIcon className="sunny"/>
    },
    winter:{
        text:"WINTER SEASON",
        iconName:<AcUnitIcon className="snow"/>
    }

}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]
    
    return (
      <div className={`season-display ${season}`}>
        <div className="icon-left">{iconName}</div>
        <div>
          <h1 className="text-align">Today is {props.date}</h1>
          <h1 className="text-align">Time: {props.time}</h1>
          <h3 className="text-align">{text}</h3>
        </div>

        <div className="icon-right">{iconName}</div>
      </div>
    );
}

export default SeasonDisplay

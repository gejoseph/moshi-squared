import React from 'react';
import { Link } from "react-router-dom";
import './PatientCard.css';
import { Card, Divider, Tag } from 'antd';
import 'antd/dist/reset.css';
import StatisticRow from '../statisticRow/StatisticRow';

function PatientCard(props) {

  var pfcolor = "green";
  var picolor = "green";

  if (props.pfTag === "poor"){
    pfcolor = "red"
  }
  else if (props.pfTag === "moderate"){
    pfcolor = "yellow"
  }

  if (props.piTag === "poor"){
    picolor = "red"
  }
  else if (props.piTag === "moderate"){
    picolor = "yellow"
  }


  return (
    <Link to="/patient" onClick={()=> props.setIndex(props.index)}>
        <Card 
            title={props.name} 
            hoverable={true} 
            extra={<span class="dot" style={{backgroundColor: props.dotColor}}></span>} 
            style={{width: 320, fontWeight: 400, borderColor: props.dotColor}} 
            className="patient-card">
            {props.metricData.map((data) => <StatisticRow 
                                                    metric={data.metric}
                                                    percentage={data.percentage}
                                                    decimal={data.decimal}
                                                    arrow={data.arrow}
                                                    />)}
            <Divider/>
            <Tag color={pfcolor}>Physical Functioning</Tag>
            <Tag color={picolor}>Pain Interference</Tag>
        </Card>
  </Link>
  
      
  );
};

export default PatientCard;
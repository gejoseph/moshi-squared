import React from 'react';
import { Link } from "react-router-dom";
import './PatientCard.css';
import { Card } from 'antd';
import 'antd/dist/reset.css';
import StatisticRow from '../statisticRow/StatisticRow';


function PatientCard(props) {
  return (
    <Link to="/patient">
        <Card title={props.name} hoverable={true} extra={<span class="dot" style={{backgroundColor: props.dotColor}}></span>} style={{width: 350}} className="patient-card">
            {props.metricData.map((data) => <StatisticRow 
                                                    metric={data.metric}
                                                    percentage={data.percentage}
                                                    decimal={data.decimal}
                                                    arrow={data.arrow}
                                                    />)}
        </Card>
  </Link>
  
      
  );
};

export default PatientCard;
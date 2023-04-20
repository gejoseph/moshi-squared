import React from 'react';
import { Typography, Tooltip} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;

function StatisticRow(props) {

    var arrowType = <ArrowUpOutlined style={{fontSize: 30, color: "#52c41a"}}/>

    if (props.arrow === "down") {
        arrowType = <ArrowDownOutlined style={{fontSize: 30, color: "#f37f89"}}/>
    }
    else if (props.arrow === "mid"){
        arrowType = <ArrowDownOutlined style={{fontSize: 30, color: "#fbaf5d"}}/>
    } 
    
    
  return (
    <div className='patient-card-content'>
        <div className='patient-card-value'>
        <span className='patient-card-arrow'>{arrowType}</span>
        <div className='patient-card-percentage'>
            <Title level={2}>{props.percentage}</Title>
            <Title level={4}>.{props.decimal}%</Title>
        </div>
        </div>
        <div className='patient-card-metric-info'>
            <Title style={{color: 'gray', fontWeight: 'normal', marginBottom: 0}} className="patient-card-metric" level={5}>{props.metric}</Title>
            <Tooltip placement="top" title={"lorem ipsum dolor"}><QuestionCircleOutlined /></Tooltip>
        </div>
    </div>
  );
};

export default StatisticRow;
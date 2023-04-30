import React from 'react';
import './Timeline.css'
import { Typography, Layout, Row, Col, Badge, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import PatientCard from '../../atoms/patientCard/PatientCard';
import patientData from '../PatientData';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

function Timeline(props) {
  return (
      <Row className='timeline'>
        <Col className="weeks-group">
            <div className='weeks-group-header'>
                <Title level={4}>Weeks 0-3</Title>
                <Badge count={1} color='#904199'></Badge>
            </div>
            <Card className='weeks-group-content' bodyStyle={{padding: "4px"}}>
                <PatientCard className="weeks-group-card"
                    name={patientData[0].name} 
                    metricData={patientData[0].metricData} 
                    dotColor={patientData[0].dotColor} 
                    index={patientData[0].key}
                    setIndex={props.setIndex}
                    pfTag={patientData[0].pfTags[0]}
                    piTag={patientData[0].piTags[0]}/>
            </Card>
        </Col>
        <Col className="weeks-group">
            <div className='weeks-group-header'>
                <Title level={4}>Weeks 4-6</Title>
                <Badge count={1} color='#904199'></Badge>
            </div>
            <Card className='weeks-group-content' bodyStyle={{padding: "4px"}}>
                <PatientCard className="weeks-group-card"
                    name={patientData[1].name} 
                    metricData={patientData[1].metricData} 
                    dotColor={patientData[1].dotColor}
                    index={patientData[1].key}
                    setIndex={props.setIndex}
                    pfTag={patientData[1].pfTags[0]}
                    piTag={patientData[1].piTags[0]}/>
            </Card>
        </Col>
        <Col className="weeks-group">
            <div className='weeks-group-header'>
                <Title level={4}>Weeks 6-9</Title>
                <Badge count={1} color='#904199'></Badge>
            </div>
            <Card className='weeks-group-content' bodyStyle={{padding: "4px"}}>
                <PatientCard className="weeks-group-card"
                    name={patientData[2].name} 
                    metricData={patientData[2].metricData} 
                    dotColor={patientData[2].dotColor} 
                    index={patientData[2].key}
                    setIndex={props.setIndex}
                    pfTag={patientData[2].pfTags[0]}
                    piTag={patientData[2].piTags[0]}/>
            </Card>
        </Col>
        <Col className="weeks-group">
            <div className='weeks-group-header'>
                <Title level={4}>Weeks 10+</Title>
                <Badge count={2} color='#904199'></Badge>
            </div>
            <Card className='weeks-group-content' bodyStyle={{padding: "4px"}}>
                <PatientCard className="weeks-group-card"
                    name={patientData[3].name} 
                    metricData={patientData[3].metricData} 
                    dotColor={patientData[3].dotColor} 
                    index={patientData[3].key}
                    setIndex={props.setIndex}
                    pfTag={patientData[3].pfTags[0]}
                    piTag={patientData[3].piTags[0]}/>
                <PatientCard className="weeks-group-card"
                    name={patientData[4].name} 
                    metricData={patientData[4].metricData} 
                    dotColor={patientData[4].dotColor} 
                    index={patientData[4].key}
                    setIndex={props.setIndex}
                    pfTag={patientData[4].pfTags[0]}
                    piTag={patientData[4].piTags[0]}/>
            </Card>
        </Col>
      </Row>
  );
};

export default Timeline;
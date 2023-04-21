import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import './App.css';
import 'antd/dist/reset.css';
import { Layout, Card, Row, Col, Typography } from 'antd';
import { stepCountAll, heartRateAll, hrsOfSleepAll } from "./data/graph/Axes";
import { stepCountData, heartRateData, hrsOfSleepData } from "./data/graph/GraphData";
import patientData from "./data/PatientData";
import Graph from "./atoms/graph/Graph";

const { Title } = Typography;
const { Content } = Layout;

const Patient = (props) => {
    
        return (
        <Content id="patient">
            <Card className="patient-header card" size="large">
                <Row className="patient-header-row">
                    <Col span={24} >
                        <Link to="/"className="patient-header-name" >
                            <ArrowLeftOutlined style={{fontSize: "20px", fontWeight: "800", paddingRight: "20px", color: "black"}}/>
                            <Title level={2}>{patientData[props.index].name}</Title>
                        </Link>
                    </Col>
                </Row>
                <Row className="patient-header-summary">
                    <Col span={4} className="patient-header-summary-profile">
                        <div className="patient-header-summary-profile-row" >
                            <Title level={5} style={{color: "#595959", marginTop: "0"}}>DOB:</Title>
                            <Title level={5} style={{color: "gray", marginTop: "0"}}>{patientData[props.index].dob}</Title>
                        </div>
                        <div className="patient-header-summary-profile-row" >
                            <Title level={5} style={{color: "#595959", marginTop: "0"}}>Age:</Title>
                            <Title level={5} style={{color: "gray", marginTop: "0"}}>{patientData[props.index].age}</Title>
                        </div>
                        <div className="patient-header-summary-profile-row">
                            <Title level={5} style={{color: "#595959", marginTop: "0"}}>Post-Op Week #:</Title>
                            <Title level={5} style={{color: "gray", marginTop: "0"}}>{patientData[props.index].currentWeek}</Title>
                        </div>
                        <div className="patient-header-summary-profile-row">
                            <Title level={5} style={{color: "#595959", marginTop: "0"}}>Phone:</Title>
                            <Title level={5} style={{color: "gray", marginTop: "0"}}>{patientData[props.index].phone}</Title>
                        </div>
                    </Col>
                    <Col span={16}>
                    </Col>
                </Row>
            </Card>
            <Card className="patient-fitbit card" size="large">
                <Row className="patient-fitbit-row">
                    <Col span={24} >
                        <Title level={3}>Fitbit Data</Title>
                    </Col>
                </Row>
                {/* <Row className="patient-stepcount">
                    <Col span={24} >
                        <Title level={4}>Step Count</Title>
                        <Graph options={stepCountAll} series={stepCountData} type="line" />
                    </Col>
                    
                </Row> */}
                
            </Card>
            <Card className="patient-promis card" size="large">
                <Row className="patient-promis-row">
                    <Col span={24} >
                        <Title level={3}>PROMIS Data</Title>
                    </Col>
                </Row>
            </Card>
        </Content>
        );
    }

export default Patient;
    
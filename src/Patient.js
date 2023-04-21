import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import './App.css';
import 'antd/dist/reset.css';
import { Layout, Card, Row, Col, Typography, Switch, Segmented } from 'antd';
import { stepCountAll, heartRateAll, hrsOfSleepAll } from "./data/graph/Axes";
import { stepCountData, heartRateData, hrsOfSleepData } from "./data/graph/GraphData";
import patientData from "./data/PatientData";
import Graph from "./atoms/graph/Graph";

const { Title } = Typography;
const { Content } = Layout;

const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

const Patient = (props) => {

        const [value, setValue] = useState('Last Week');
    
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
                    <Col span={24} className="patient-fitbit-title" >
                        <Title level={3}>Fitbit Data</Title>
                        <div className="patient-fitbit-options">
                            <div className="patient-fitbit-switch-group">
                                <Switch defaultChecked onChange={onChange} className="patient-fitbit-switch"/>
                                <Title level={5}>Show Others</Title>
                            </div>
                            <Segmented options={['Last Week', 'Last Month', 'Last 3 Months']} value={value} onChange={setValue} className="patient-fitbit-segmented"/>
                        </div>
                    </Col>
                </Row>
                <Row className="patient-fitbit-metric">
                    <Col span={24} className="patient-fibit-metric-graph" >
                        <Title level={4} className="patient-fibit-metric-title">Step Count</Title>
                        <Graph options={stepCountAll} series={stepCountData} type="line" />
                    </Col>
                </Row>
                <Row className="patient-fitbit-metric">
                    <Col span={24} className="patient-fibit-metric-graph" >
                        <Title level={4} className="patient-fibit-metric-title">Heart Rate</Title>
                        <Graph options={heartRateAll} series={heartRateData} type="line" />
                    </Col>
                </Row>
                <Row className="patient-fitbit-metric">
                    <Col span={24} className="patient-fibit-metric-graph" >
                        <Title level={4} className="patient-fibit-metric-title">Hrs of Sleep</Title>
                        <Graph options={hrsOfSleepAll} series={hrsOfSleepData} type="line" />
                    </Col>
                </Row>
            </Card>
            <Card className="patient-promis card" size="large">
                <Row className="patient-promis-row">
                    <Col span={24} className="patient-promis-title" >
                        <Title level={3}>PROMIS Data</Title>
                        <div className="patient-promis-options">
                            <div className="patient-promis-switch-group">
                                <Switch defaultChecked onChange={onChange} className="patient-promis-switch"/>
                                <Title level={5}>Show Others</Title>
                            </div>
                            <Segmented options={['Last Week', 'Last Month', 'Last 3 Months']} value={value} onChange={setValue} className="patient-promis-segmented"/>
                        </div>
                    </Col>
                </Row>
                <Row className="patient-promis-metric">
                    <Col span={11} className="patient-promis-metric-graph" >
                        <Title level={4} className="patient-promis-metric-title">Physical Functioning</Title>
                        <Graph options={hrsOfSleepAll} series={hrsOfSleepData} type="line" />
                    </Col>
                    <Col span={11} className="patient-promis-metric-graph" >
                        <Title level={4} className="patient-promis-metric-title">Pain Interference</Title>
                        <Graph options={hrsOfSleepAll} series={hrsOfSleepData} type="line" />
                    </Col>
                </Row>
            </Card>
        </Content>
        );
    }

export default Patient;
    
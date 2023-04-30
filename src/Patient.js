import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, QuestionCircleOutlined, CaretUpOutlined, CaretDownOutlined, MinusOutlined } from '@ant-design/icons';
import image from "./assets/frame.png"
import './App.css';
import 'antd/dist/reset.css';
import { Layout, Card, Row, Col, Typography, Switch, Segmented, Tooltip, Tabs } from 'antd';
import { stepCountAnnotated, heartRateAnnotated, hrsOfSleepAnnotated, physicalFuncAnnotated, painInterAnnotated } from "./data/graph/Axes";
import { stepCountData, heartRateData, hrsOfSleepData, physicalFuncData, painInterData, patientFitbitGraphOptions } from "./data/graph/GraphData";
import { stepCountAll, heartRateAll, hrsOfSleepAll } from "./data/graph/Axes";
import patientData from "./data/PatientData";
import Graph from "./atoms/graph/Graph";

const { Title } = Typography;
const { Content } = Layout;

const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  

const Patient = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

        const [value, setValue] = useState('Last Week');

        const overviewOptions = {
            chart: {
                height: 50,
                type: 'area',
                toolbar: {
                    show: false
                },
            },
            colors: ["#904199", "#acacac"],
            stroke: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            yaxis: {
                show: false
            },
            xaxis: {
                labels: {
                    show: false
                },
                axisTicks: {       
                    show: false         
                }
            },
            tooltip: {
                show: false
            }
        }

        const metricOverview = [{
            name: "Recent Step Count",
            data: patientData[props.index].metricData[0].data.slice(-3)
        },{
            name: "Recent Heart Rate",
            data: patientData[props.index].metricData[1].data.slice(-3)
        },
        {
            name: "Recent Hrs of Sleep",
            data: patientData[props.index].metricData[2].data.slice(-3)
        }]

        const averageData = [
            {
                name: "Average Step Count",
                data: [3000, 2000, 1000, 1000, 1500, 2000, 2700, 3000, 3000, 3500, 4000, 5000, 6500, 7000, 7000, 8000]
            },
            {
                name: "Average Heart Rate",
                data: [100, 101, 100, 115, 105, 100, 95, 92, 89, 89, 90, 80, 85, 85, 84, 82]
            },
            {
                name: "Average Hrs of Sleep",
                data: [5, 5, 6, 7, 6, 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 8]
            },
            {
                name: "Physical Functioning",
                data: [50, 50, 60, 70, 60, 60, 70, 70, 80, 80, 80, 90, 90, 90, 90, 80]
            },
            {
                name: "Pain Interference",
                data: [50, 50, 60, 70, 60, 60, 70, 70, 80, 80, 80, 90, 90, 90, 90, 80]
            },
        ]

        var stepCountOptions = {
            series: [{
                name: 'Step Count',
                type: 'column',
                data: stepCountData[props.index].data
              }, {
                name: 'Average',
                type: 'area',
                data: averageData[0].data
              }],
            options: patientFitbitGraphOptions
        }

        var heartRateOptions = {
            series: [{
                name: 'Heart Rate',
                type: 'column',
                data: heartRateData[props.index].data
              }, {
                name: 'Average',
                type: 'area',
                data: averageData[1].data
              }],
            options: patientFitbitGraphOptions
        }

        var hrsOfSleepOptions = {
            series: [{
                name: 'Hours of Sleep',
                type: 'column',
                data: hrsOfSleepData[props.index].data
              }, {
                name: 'Average',
                type: 'area',
                data: averageData[2].data
              }],
            options: patientFitbitGraphOptions
        }

        var pfOptions = {
            series: [{
                name: 'Physical Functioning',
                type: 'column',
                data: physicalFuncData[props.index].data
              }, {
                name: 'Average',
                type: 'area',
                data: averageData[3].data
              }],
            options: patientFitbitGraphOptions
        }

        var piOptions = {
            series: [{
                name: 'Pain Interference',
                type: 'column',
                data: painInterData[props.index].data
              }, {
                name: 'Average',
                type: 'area',
                data: averageData[4].data
              }],
            options: patientFitbitGraphOptions
        }

        const metrics = [
            {
              key: '1',
              label: `Step Count`,
              children: <div>
                {/* <Graph options={stepCountAnnotated} series={[stepCountData[props.index]]} type="bar" /> */}
                <Chart options={stepCountOptions.options} series={stepCountOptions.series} type="bar" height={350}></Chart>
              </div>,
            },
            {
              key: '2',
              label: `Heart Rate`,
              children: <div>
                {/* <Graph options={heartRateAnnotated} series={[heartRateData[props.index]]} type="bar" /> */}
                <Chart options={heartRateOptions.options} series={heartRateOptions.series} type="bar" height={350}></Chart>
              </div>,
            },
            {
              key: '3',
              label: `Hrs of Sleep`,
              children: <div>
                {/* <Graph options={hrsOfSleepAnnotated} series={[hrsOfSleepData[props.index]]} type="bar" /> */}
                <Chart options={hrsOfSleepOptions.options} series={hrsOfSleepOptions.series} type="bar" height={350}></Chart>
              </div>,
            },
          ];
    
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
                    <Col span={15} className="patient-metric-summaries">
                        <div className="patient-metric-summary">
                            <div className='patient-card-metric-info'>
                                <Title style={{color: 'gray', fontWeight: 'normal', marginBottom: 0}} className="patient-card-metric" level={5}>Daily Steps</Title>
                                <Tooltip placement="top" title={"lorem ipsum dolor"}><QuestionCircleOutlined /></Tooltip>
                            </div>
                            <div className='patient-card-metric-stat'>
                                <Title level={4} style={{margin: 0}}>{patientData[props.index].metricData[0].avg}</Title>
                                <Title level={5} style={{fontWeight: 'normal', margin: 0}}>{patientData[props.index].metricData[0].percentage}% {patientData[props.index].metricData[0].arrow === "down" ? <CaretDownOutlined style={{color: "#f37f89"}}/> : (patientData[props.index].metricData[0].arrow === "mid" ? <MinusOutlined style={{color: "#acacac"}}/>: <CaretUpOutlined style={{color: "#52c41a"}}/>)} </Title>
                            </div>
                            {/* <img className="image" src={image} alt="flow"></img> */}
                            <Chart options={overviewOptions} series={[metricOverview[0]]} type="area" height={120}></Chart>
                        </div>
                        <div className="patient-metric-summary">
                            <div className='patient-card-metric-info'>
                                <Title style={{color: 'gray', fontWeight: 'normal', marginBottom: 0}} className="patient-card-metric" level={5}>Heart Rate</Title>
                                <Tooltip placement="top" title={"lorem ipsum dolor"}><QuestionCircleOutlined /></Tooltip>
                            </div>
                            <div className='patient-card-metric-stat'>
                                <Title level={4} style={{margin: 0}}>{patientData[props.index].metricData[1].avg}</Title>
                                <Title level={5} style={{fontWeight: 'normal', margin: 0}}>{patientData[props.index].metricData[1].percentage}% {patientData[props.index].metricData[1].arrow === "down" ? <CaretDownOutlined style={{color: "#52c41a"}}/> : (patientData[props.index].metricData[1].arrow === "mid" ? <MinusOutlined style={{color: "#acacac"}}/>: <CaretUpOutlined style={{color: "#f37f89"}}/>)} </Title>
                            </div>
                            {/* <img className="image" src={image} alt="flow"></img> */}
                            <Chart options={overviewOptions} series={[metricOverview[1]]} type="area" height={120}></Chart>
                        </div>
                        <div className="patient-metric-summary">
                            <div className='patient-card-metric-info'>
                                <Title style={{color: 'gray', fontWeight: 'normal', marginBottom: 0}} className="patient-card-metric" level={5}>Hours of Sleep</Title>
                                <Tooltip placement="top" title={"lorem ipsum dolor"}><QuestionCircleOutlined /></Tooltip>
                            </div>
                            <div className='patient-card-metric-stat'>
                                <Title level={4} style={{margin: 0}}>{patientData[props.index].metricData[2].avg}</Title>
                                <Title level={5} style={{fontWeight: 'normal', margin: 0}}>{patientData[props.index].metricData[2].percentage}% {patientData[props.index].metricData[2].arrow === "down" ? <CaretDownOutlined style={{color: "#f37f89"}}/> : (patientData[props.index].metricData[2].arrow === "mid" ? <MinusOutlined style={{color: "#acacac"}}/>: <CaretUpOutlined style={{color: "#52c41a"}}/>)} </Title>
                            </div>
                            {/* <img className="image" src={image} alt="flow"></img> */}
                            <Chart options={overviewOptions} series={[metricOverview[1]]} type="area" height={120}></Chart>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card className="card">
                <Row>
                    <Col span={24} className="patient-fitbit-title" >
                            <Title level={3}>Fitbit Data</Title>
                            <div className="patient-fitbit-options">
                                <Segmented options={['Last Week', 'Last Month', 'Last 3 Months']} value={value} onChange={setValue} className="patient-fitbit-segmented"/>
                            </div>
                        </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Tabs id="metric-tabs" className="tabs" defaultActiveKey="1" items={metrics} />
                    </Col>
                </Row>
            </Card>
            <Card className="card">
                <Row>
                    <Col span={24} className="patient-fitbit-title" >
                            <Title level={3}>PROMIS Data</Title>
                            <div className="patient-fitbit-options">
                                <Segmented options={['Last Week', 'Last Month', 'Last 3 Months']} value={value} onChange={setValue} className="patient-fitbit-segmented"/>
                            </div>
                        </Col>
                </Row>
                <Row className="patient-promis-metric">
                    <Col className="patient-promis-metric-graph" >
                        <Title level={4} className="patient-promis-metric-title">Physical Functioning</Title>
                        <Graph options={pfOptions.options} series={pfOptions.series} type="bar" height={350} />
                    </Col>
                    <Col className="patient-promis-metric-graph" >
                        <Title level={4} className="patient-promis-metric-title">Pain Interference</Title>
                        <Graph options={piOptions.options} series={piOptions.series} type="bar" height={350} />
                    </Col>
                </Row>
            </Card>
        </Content>
        );
    }

export default Patient;
    
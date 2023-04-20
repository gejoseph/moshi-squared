import React, { Component } from "react";
import './App.css';
import 'antd/dist/reset.css';
import { Layout, Card, Typography, Row, Col, Input, Select, Tabs, Table } from 'antd';
import Graph from "./atoms/graph/Graph";
import tableColumns from "./data/table/TableColumns";
import tableData from "./data/table/TableData";
import { stepCount, heartRate, hrsOfSleep } from "./data/graph/Axes";
import { stepCountData, heartRateData, hrsOfSleepData } from "./data/graph/GraphData";
import Watchlist from "./atoms/watchlist/Watchlist";
const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const onSearch = (value) => console.log(value);
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const onChange = (key) => {
  console.log(key);
};

const metrics = [
  {
    key: '1',
    label: `Step Count`,
    children: <div>
      <Graph options={stepCount} series={stepCountData} type="line" />
      <Watchlist metric="Step Count"/>
    </div>,
  },
  {
    key: '2',
    label: `Heart Rate`,
    children: <div>
      <Graph options={heartRate} series={heartRateData} type="line" />
      <Watchlist metric="Heart Rate"/>
    </div>,
  },
  {
    key: '3',
    label: `Hrs of Sleep`,
    children: <div>
      <Graph options={hrsOfSleep} series={hrsOfSleepData} type="line" />
      <Watchlist metric="Hrs of Sleep"/>
    </div>,
  },
];

const views = [
  {
    key: '1',
    label: `Table View`,
    children: <div>
      <Table columns={tableColumns} dataSource={tableData} />
    </div>,
  },
  {
    key: '2',
    label: `Timeline View`,
    children: <div>
        
    </div>,
  },
];


class Dashboard extends Component {

  render() {
    return (

        <Content id="dashboard">
            <Card size="large" className="card">
                <Row className="card-top-row" align="middle">
                <Col span={16}>
                    <Title level={2} className="card-title">Patient Trends</Title>
                </Col>
                <Col className="card-filters">
                    <Search id="search" placeholder="Doe, John" onSearch={onSearch} className="card-filter"/>
                    <Select
                    mode="single"
                    className="filter"
                    placeholder="Filter by Week(s)"
                    onChange={handleChange}
                    optionLabelProp="label"
                    >
                    <Option value="All Weeks" label="All Weeks">
                    </Option>
                    <Option value="Weeks 1-3" label="Weeks 1-3">
                    </Option>
                    <Option value="Weeks 4-6" label="Weeks 4-6">
                    </Option>
                    <Option value="Weeks 7-9" label="Weeks 7-9">
                    </Option>
                    </Select>
                </Col>
                </Row>
                <Row>
                <Col span={24}>
                    <Tabs id="metric-tabs" className="tabs" defaultActiveKey="1" items={metrics} onChange={onChange} />
                </Col>
                </Row>
            </Card>
            <Card size="large" className="card">
                <Row className="card-top-row" align="middle">
                <Col span={24}>
                    <Title level={2} className="card-title">Patient Index</Title>
                </Col>
                </Row>
                <Row>
                <Col span={24}>
                    <Tabs id="view-tabs" className="tabs" defaultActiveKey="1" items={views} onChange={onChange} />
                </Col>
                </Row>
            </Card>
        </Content>
      
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import './App.css';
import 'antd/dist/reset.css';
import Navbar from "./atoms/navbar/Navbar";
import { Layout, Card, Typography, Row, Col, Input, Select, Tabs, ConfigProvider } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Graph from "./atoms/graph/Graph";
import PatientCard from "./atoms/patientCard/PatientCard";
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

const dailySteps = {
  chart: {
    id: "Daily Steps"
  },
  xaxis: {
    categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
  }
}

const dailyStepsData = [
  {
    name: "Doe, John",
    data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 70, 60, 60]
  },
  {
    name: "Smith, Jane",
    data: [45, 50, 49, 60, 70, 91, 45, 67, 80, 70, 60, 60]
  },
  {
    name: "Johnson, Alice",
    data: [70, 91, 45, 67, 80, 70, 60, 60, 45, 50, 49, 60]
  }
]

const metrics = [
  {
    key: '1',
    label: `Daily Steps`,
    children: <div>
      <Graph options={dailySteps} series={dailyStepsData} type="line" />
      <div>
        <Row>
          <Title className="subtitle" level={4}>Watch List</Title>
        </Row>
        <Row className="patient-cards">
          <PatientCard 
            name="Doe, John" 
            arrow={<ArrowDownOutlined style={{fontSize: 30, color: "red"}}/>}
            percentage="11"
            decimal="28"
            metric="Daily Steps"
            metricDescription="lorem ipsum dolor"
          ></PatientCard>
          <PatientCard 
            name="Smith, Jane" 
            arrow={<ArrowUpOutlined style={{fontSize: 30, color: "green"}}/>}
            percentage="14"
            decimal="67"
            metric="Daily Steps"
            metricDescription="lorem ipsum dolor"
          ></PatientCard>
          <PatientCard 
            name="Johnson, Alice" 
            arrow={<ArrowUpOutlined style={{fontSize: 30, color: "green"}}/>}
            percentage="26"
            decimal="34"
            metric="Daily Steps"
            metricDescription="lorem ipsum dolor"
          ></PatientCard>
        </Row>
      </div>
      
    </div>,
  },
  {
    key: '2',
    label: `Heart Rate`,
    children: <div>

    </div>,
  },
  {
    key: '3',
    label: `Hrs of Sleep`,
    children: <div>

    </div>,
  },
];

const views = [
  {
    key: '1',
    label: `Table View`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Timeline View`,
    children: `Content of Tab Pane 2`,
  },
];


class App extends Component {

  render() {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#904199',
          },
        }}
      >
        <Layout className="App">
        <Navbar/>
        <Content id="main">
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
      </Layout>
      </ConfigProvider>
      
    );
  }
}

export default App;

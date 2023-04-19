import React, { Component } from "react";
import Chart from "react-apexcharts";
import './Graph.css';
import { Typography, Layout, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

function Graph(props) {
  
    return (
    <Chart
    options={props.options}
    series={props.series}
    type={props.type}
    className="graph"
    height={400}
    />
    );

}
  
  export default Graph;
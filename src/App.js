import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'antd/dist/reset.css';
import Navbar from "./atoms/navbar/Navbar";
import { ConfigProvider, Layout } from 'antd';
import Patient from "./Patient";
import Dashboard from "./Dashboard";


class App extends Component {

  render() {
    return (
      <ConfigProvider
        theme={{
          token: {
                "colorPrimary": "#904199",
                "colorBorderSecondary": "#f0f0f0",
                "borderRadius": 8,
                "colorInfo": "#904199",
                "colorSuccess": "#52c41a",
                "colorWarning": "#fbaf5d",
                "colorError": "#f37f89"
              }
        }}
      >
        
      <Layout className="App">
        <Navbar/>
        <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patient" element={<Patient/>} />
        </Routes> 
      </Router>
      </Layout>
    </ConfigProvider>
      
    );
  }
}

export default App;

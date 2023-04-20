import React from 'react';
import { Tag } from 'antd';
import { Link } from "react-router-dom";

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to="/patient">{text}</Link>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Step Count',
    dataIndex: 'stepCount',
    key: 'stepCount',
  },
  {
    title: 'Heart Rate',
    dataIndex: 'heartRate',
    key: 'heartRate',
  },
  {
    title: 'Hrs of Sleep',
    dataIndex: 'hrsOfSleep',
    key: 'hrsOfSleep',
  },
  {
    title: 'Physical Functioning',
    key: 'pfTags',
    dataIndex: 'pfTags',
    render: (_, { pfTags }) => (
      <>
        {pfTags.map((pfTag) => {
          let color = 'yellow';
          if (pfTag === 'severe') {
            color = 'red';
          }
          else if (pfTag === 'good') {
            color = 'green';
          }
          return (
            <Tag color={color} key={pfTag}>
              {pfTag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Pain Interference',
    key: 'piTags',
    dataIndex: 'piTags',
    render: (_, { piTags }) => (
      <>
        {piTags.map((piTag) => {
          let color = 'yellow';
          if (piTag === 'severe') {
            color = 'red';
          }
          else if (piTag === 'good') {
            color = 'green';
          }
          return (
            <Tag color={color} key={piTag}>
              {piTag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

export default tableColumns;

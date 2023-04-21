import React from 'react';
import { Tag } from 'antd';
import { Link } from "react-router-dom";

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: {
      compare: (a, b) => a.name <= b.name,
      multiple: 3,
    },
    // filters: [
    //   { text: 'Male', value: 'male' },
    //   { text: 'Female', value: 'female' },
    // ],
    render: (name) => <Link to="/patient">{name}</Link>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: {
      compare: (a, b) => a.age - b.age,
      multiple: 3,
    },
  },
  {
    title: 'Step Count',
    dataIndex: 'stepCount',
    key: 'stepCount',
    sorter: {
      compare: (a, b) => a.stepCount - b.stepCount,
      multiple: 3,
    },
  },
  {
    title: 'Heart Rate',
    dataIndex: 'heartRate',
    key: 'heartRate',
    sorter: {
      compare: (a, b) => a.heartRate - b.heartRate,
      multiple: 3,
    },
  },
  {
    title: 'Hrs of Sleep',
    dataIndex: 'hrsOfSleep',
    key: 'hrsOfSleep',
    sorter: {
      compare: (a, b) => a.hrsOfSleep - b.hrsOfSleep,
      multiple: 3,
    },
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

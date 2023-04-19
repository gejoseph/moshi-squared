import React from 'react';
import './index.css';
import { Space, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

const Columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Step Count',
    dataIndex: 'step count',
    key: 'step count',
  },
  {
    title: 'Heart Rate',
    dataIndex: 'heart rate',
    key: 'heart rate',
  },
  {
    title: 'Hrs of Sleep',
    dataIndex: 'hrs of sleep',
    key: 'hrs of sleep',
  },
  {
    title: 'Physical Functioning',
    key: 'physical functioning',
    dataIndex: 'physical functioning',
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
    key: 'pain interference',
    dataIndex: 'pain interference',
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

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    pfTags: ['severe', 'moderate'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    pfTags: ['moderate'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    pfTags: ['moderate', 'good'],
  },
];

export default Columns;

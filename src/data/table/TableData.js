import React from 'react';
import { Space, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import patientData from '../PatientData';


const tableData = [
    {
      key: patientData[0].key,
      name: patientData[0].name,
      age: patientData[0].age,
      stepCount: patientData[0].metricData[0].avg,
      heartRate: patientData[0].metricData[1].avg,
      hrsOfSleep: patientData[0].metricData[2].avg,
      pfTags: patientData[0].pfTags,
      piTags: patientData[0].piTags
    },
    {
      key: patientData[1].key,
      name: patientData[1].name,
      age: patientData[1].age,
      stepCount: patientData[1].metricData[0].avg,
      heartRate: patientData[1].metricData[1].avg,
      hrsOfSleep: patientData[1].metricData[2].avg,
      pfTags: patientData[1].pfTags,
      piTags: patientData[1].piTags
    },
    {
      key: patientData[2].key,
      name: patientData[2].name,
      age: patientData[2].age,
      stepCount: patientData[2].metricData[0].avg,
      heartRate: patientData[2].metricData[1].avg,
      hrsOfSleep: patientData[2].metricData[2].avg,
      pfTags: patientData[2].pfTags,
      piTags: patientData[2].piTags
    },
  ];

  // const data = patientData.map((patient) => {
  //     key: patient.key,
  //     name: patient.name,
  //     age: patient.age,
  //     stepCount: patient.metricData[0].avg,
  //     heartRate: patient.metricData[1].avg,
  //     hrsOfSleep: patient.metricData[2].avg,
  //     pfTags: patient.pfTags,
  //     piTags: patient.piTags
  //   }
  // );


  export default tableData;
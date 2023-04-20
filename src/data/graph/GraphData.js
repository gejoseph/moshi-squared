import patientData from "../PatientData"

const stepCountData = [
    {
        name: patientData[0].name,
        data: patientData[0].metricData[0].data
    },
    {
        name: patientData[1].name,
        data: patientData[1].metricData[0].data
    },
    {
        name: patientData[2].name,
        data: patientData[2].metricData[0].data
    }
]

const heartRateData = [
    {
        name: patientData[0].name,
        data: patientData[0].metricData[1].data
    },
    {
        name: patientData[1].name,
        data: patientData[1].metricData[1].data
    },
    {
        name: patientData[2].name,
        data: patientData[2].metricData[1].data
    }
]

const hrsOfSleepData = [
    {
        name: patientData[0].name,
        data: patientData[0].metricData[2].data
    },
    {
        name: patientData[1].name,
        data: patientData[1].metricData[2].data
    },
    {
        name: patientData[2].name,
        data: patientData[2].metricData[2].data
    }
]

export {
    stepCountData,
    heartRateData,
    hrsOfSleepData
}
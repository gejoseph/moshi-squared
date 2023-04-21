

const patientData = [
    {
        key: 0,
        name: 'Doe, John',
        age: 32,
        dob: "09/23/1998",
        phone: "(981) 532-8359",
        metricData: [
            {
                metric: "Step Count",
                data: [ 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000 ], // by week for weeks 1-12
                avg: 8000,
                percentage: 11,
                decimal: 28,
                arrow: "up"
            },
            {
                metric: "Heart Rate",
                data: [ 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000 ], // by week for weeks 1-12
                avg: 8000,
                percentage: 13,
                decimal: 67,
                arrow: "down",
            },
            {
                metric: "Hrs of Sleep",
                data: [ 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000 ], // by week for weeks 1-12
                avg: 6000,
                percentage: 5,
                decimal: 45,
                arrow: "mid"
            }
        ],
        pfTags: ['severe'],
        piTags: ['moderate'],
        dotColor: "#3E8DF3",
        currentWeek: 7
    },
    {
        key: 1,
        name: 'Smith, Jane',
        age: 53,
        dob: "09/23/1998",
        phone: "(981) 532-8359",
        metricData: [
            {
                metric: "Step Count",
                data: [ 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000 ], // by week for weeks 1-12
                avg: 8000,
                percentage: 11,
                decimal: 28,
                arrow: "up",
            },
            {
                metric: "Heart Rate",
                data: [ 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000 ], // by week for weeks 1-12
                avg: 6000,
                percentage: 13,
                decimal: 67,
                arrow: "down",
            },
            {
                metric: "Hrs of Sleep",
                data: [ 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000 ], // by week for weeks 1-12
                avg: 7000,
                percentage: 5,
                decimal: 45,
                arrow: "mid"
            }
        ],
        pfTags: ['severe'],
        piTags: ['moderate'],
        dotColor: "#F3B344",
        currentWeek: 7
    },
    {
        key: 2,
        name: 'Johnson, Alice',
        age: 44,
        dob: "09/23/1998",
        phone: "(981) 532-8359",
        metricData: [
            {
                metric: "Step Count",
                data: [ 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000 ], // by week for weeks 1-12
                avg: 8000,
                percentage: 11,
                decimal: 28,
                arrow: "up"
            },
            {
                metric: "Heart Rate",
                data: [ 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000 ], // by week for weeks 1-12
                avg: 7000,
                percentage: 13,
                decimal: 67,
                arrow: "down",
            },
            {
                metric: "Hrs of Sleep",
                data: [ 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000 ], // by week for weeks 1-12
                avg: 8000,
                percentage: 5,
                decimal: 45,
                arrow: "mid"
            }
        ],
        pfTags: ['severe'],
        piTags: ['moderate'],
        dotColor: "#67E09C",
        currentWeek: 7
    },
]


export default patientData;
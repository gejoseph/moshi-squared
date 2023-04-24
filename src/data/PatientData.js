

const patientData = [
    {
        key: 1,
        name: 'Smith, Alice',
        age: 64,
        metricData: [
          {
            metric: 'Step Count',
            data: [1342, 3000],
            avg: 2171,
            percentage: 123,
            decimal: 54,
            arrow: 'up'
          },
          {
            metric: 'Heart Rate',
            data: [80, 75],
            avg: 77.5,
            percentage: 6,
            decimal: 25,
            arrow: 'down'
          },
          {
            metric: 'Hrs of Sleep',
            data: [7, 7],
            avg: 7,
            percentage: 0,
            decimal: 0,
            arrow: 'up'
          }
        ],
        pfTags: ['severe'],
        piTags: ['moderate'],
        dotColor: '#3E8DF3'
      },
      {
        key: 2,
        name: 'Ethan White',
        age: 59,
        metricData: [
            {
                metric: "Step Count",
                data: [1500, 2000, 2121, 2500], // by week for weeks 1-12
                avg: 2030.25,
                percentage: 35,
                decimal: 10,
                arrow: "up"
            },
            {
                metric: "Heart Rate",
                data: [80, 78, 78, 76], // by week for weeks 1-12
                avg: 78,
                percentage: -2.56,
                decimal: 2,
                arrow: "down",
            },
            {
                metric: "Hrs of Sleep",
                data: [6.5, 6.7, 6.5, 6.9], // by week for weeks 1-12
                avg: 6.65,
                percentage: 2.26,
                decimal: 0,
                arrow: "up"
            }
        ],
        pfTags: ['moderate'],
        piTags: ['mild'],
        dotColor: "#F9A825"
    },
    {
        key: 3,
        name: "Martin, Mia",
        age: 62,
        metricData: [
          {
            metric: "Step Count",
            data: [500, 600, 700, 800, 2789, 900],
            avg: 1081.33,
            percentage: 93.39,
            decimal: 88,
            arrow: "up"
          },
          {
            metric: "Heart Rate",
            data: [95, 94, 93, 92, 76, 91],
            avg: 91.83,
            percentage: 30.23,
            decimal: 19,
            arrow: "down"
          },
          {
            metric: "Hrs of Sleep",
            data: [4.5, 4.6, 4.7, 4.8, 7.2, 4.9],
            avg: 5.15,
            percentage: 38.83,
            decimal: 2,
            arrow: "up"
          }
        ],
        pfTags: ["moderate"],
        piTags: ["mild"],
        dotColor: "#F9D71C"
      },
      {
        key: 4,
        name: 'Johnson, Bob',
        age: 67,
        metricData: [
        {
            metric: "Step Count",
            data: [ 1000, 1500, 2000, 2500, 3000, 3198, 3500 ], // by week for weeks 1-7
            avg: 2256.4,
            percentage: 123,
            decimal: 54,
            arrow: "up"
        },
        {
            metric: "Heart Rate",
            data: [90, 88, 85, 82, 79, 72, 76 ], // by week for weeks 1-7
            avg: 83.7,
            percentage: 6,
            decimal: 25,
            arrow: "down",
        },
        {
            metric: "Hrs of Sleep",
            data: [ 5, 5.5, 6, 6.5, 7, 7.5, 7.5 ], // by week for weeks 1-7
            avg: 6.3,
            percentage: 0,
            decimal: 0,
            arrow: "up"
        }
        ],
        pfTags: ['moderate'],
        piTags: ['mild'],
        dotColor: "#5BB85D"
        },
        {
    key: 5,
    name: 'Davis, Layla',
    age: 69,
    metricData: [
        {
            metric: "Step Count",
            data: [2000, 2500, 3000, 3200, 3300, 3650, 3350],
            avg: 2971.4,
            percentage: 148.6,
            decimal: 28.6,
            arrow: "up"
        },
        {
            metric: "Heart Rate",
            data: [85, 82, 79, 78, 77, 75, 76],
            avg: 79.4,
            percentage: 0,
            decimal: 0,
            arrow: "up"
        },
        {
            metric: "Hrs of Sleep",
            data: [6, 6.5, 7, 7.5, 7.5, 7.8, 7.5],
            avg: 7.125,
            percentage: 8.9,
            decimal: 0.625,
            arrow: "up"
        }
    ],
    pfTags: ['moderate'],
    piTags: ['severe'],
    dotColor: "#F7DC6F"
}, 
{
    key: 5,
    name: 'Davis, Layla',
    age: 69,
    metricData: [
        {
            metric: "Step Count",
            data: [2000, 2500, 3000, 3200, 3300, 3650, 3350],
            avg: 2971.4,
            percentage: 148.6,
            decimal: 28.6,
            arrow: "up"
        },
        {
            metric: "Heart Rate",
            data: [85, 82, 79, 78, 77, 75, 76],
            avg: 79.4,
            percentage: 0,
            decimal: 0,
            arrow: "up"
        },
        {
            metric: "Hrs of Sleep",
            data: [6, 6.5, 7, 7.5, 7.5, 7.8, 7.5],
            avg: 7.125,
            percentage: 8.9,
            decimal: 0.625,
            arrow: "up"
        }
    ],
    pfTags: ['moderate'],
    piTags: ['severe'],
    dotColor: "#F7DC6F"
},
{
    key: 6,
    name: "Michael Martin",
    age: 61,
    metricData: [
      {
        metric: "Step Count",
        data: [1000, 1500, 2000, 2500, 3000, 4050],
        avg: 2183.33,
        percentage: 117.95,
        decimal: 65,
        arrow: "up"
      },
      {
        metric: "Heart Rate",
        data: [90, 87, 84, 81, 78, 74],
        avg: 83.5,
        percentage: 8.38,
        decimal: 6,
        arrow: "down"
      },
      {
        metric: "Hrs of Sleep",
        data: [5, 5.5, 6, 6.5, 7, 7.5],
        avg: 6.25,
        percentage: 25,
        decimal: 1.25,
        arrow: "up"
      }
    ],
    pfTags: ["moderate"],
    piTags: ["mild"],
    dotColor: "#F6BB42"
  },
  {
    key: 7,
    name: 'Thompson, Noah',
    age: 56,
    metricData: [
        {
            metric: "Step Count",
            data: [ 1500, 1800, 2100, 2400, 1900, 2200, 4422 ],
            avg: 2383,
            percentage: 148,
            decimal: 183,
            arrow: "up"
        },
        {
            metric: "Heart Rate",
            data: [ 85, 83, 81, 79, 83, 85, 72 ],
            avg: 81.29,
            percentage: 116,
            decimal: 6,
            arrow: "up"
        },
        {
            metric: "Hrs of Sleep",
            data: [ 6, 6.5, 7, 7.5, 6, 6.5, 7.3 ],
            avg: 6.61,
            percentage: 11,
            decimal: 0,
            arrow: "up"
        }
    ],
    pfTags: ['severe'],
    piTags: ['moderate'],
    dotColor: "#3E8DF3"
},
{
    key: 8,
    name: "Brown, Charlie",
    age: 58,
    metricData: [
        {
            metric: "Step Count",
            data: [1500, 1200, 800, 400, 600, 1000, 1500, 5043, 2000],
            avg: 1615.89,
            percentage: -7.08,
            decimal: 9.91,
            arrow: "down"
        },
        {
            metric: "Heart Rate",
            data: [85, 87, 89, 91, 93, 95, 97, 71, 100],
            avg: 90.22,
            percentage: -5.53,
            decimal: 4.78,
            arrow: "down"
        },
        {
            metric: "Hrs of Sleep",
            data: [6, 5.5, 5, 4.5, 5, 5.5, 6, null, 6.5],
            avg: 5.44,
            percentage: 19.85,
            decimal: 0.89,
            arrow: "up"
        }
    ],
    pfTags: ["moderate"],
    piTags: ["severe"],
    dotColor: "#EA526F"
},
{
    key: 9,
    name: 'Amelia Sanders',
    age: 53,
    metricData: [
      {
        metric: 'Step Count',
        data: [2234, 3021, 3876, 4532, 5265, 6024, 6655, 7032, 5711, 7421],
        avg: 4833.2,
        percentage: 329,
        decimal: 244.8,
        arrow: 'up'
      },
      {
        metric: 'Heart Rate',
        data: [79, 78, 76, 74, 72, 70, 69, 68, 69, 67],
        avg: 72.2,
        percentage: 8,
        decimal: 5.8,
        arrow: 'down'
      },
      {
        metric: 'Hrs of Sleep',
        data: [7.2, 7.5, 7.3, 7.1, 7, 7.2, 7.5, 7.8, 7.5, 8],
        avg: 7.45,
        percentage: 13,
        decimal: 0.95,
        arrow: 'up'
      }
    ],
    pfTags: ['moderate'],
    piTags: ['severe'],
    dotColor: '#6E68FF'
  },
  {
    key: 10,
    name: "Thomas, Ryan",
    age: 53,
    metricData: [
        {
            metric: "Step Count",
            data: [1842, 2763, 3852, 4824, 5841, 6912, 8028, 9216, 10404, 6123, 11763],
            avg: 7158.09,
            percentage: -31.39,
            decimal: -3166.48,
            arrow: "down"
        },
        {
            metric: "Heart Rate",
            data: [76, 74, 72, 70, 68, 70, 72, 74, 76, 70, 78],
            avg: 72.36,
            percentage: 12.1,
            decimal: 8.36,
            arrow: "up"
        },
        {
            metric: "Hrs of Sleep",
            data: [6.2, 6.5, 6.8, 6.5, 6.2, 6.1, 6, 6.1, 6.2, 7.8],
            avg: 6.55,
            percentage: 19.85,
            decimal: 1.08,
            arrow: "up"
        }
    ],
    pfTags: ["moderate"],
    piTags: ["moderate"],
    dotColor: "#F5A623"
},
{
    key: '11',
    name: 'Davis, David',
    age: 63,
    metricData: [
        {
            metric: "Step Count",
            data: [2076, 3124, 4278, 5376, 6312, 7362, 8454, 9504, 10608, 11706, 6599, 12546],
            avg: 7567,
            percentage: 115,
            decimal: 112,
            arrow: "up"
        },
        {
            metric: "Heart Rate",
            data: [70, 68, 72, 76, 80, 82, 84, 86, 88, 90, 68, 92],
            avg: 79,
            percentage: 107,
            decimal: 82,
            arrow: "up"
        }
    ],
    pfTags: [],
    piTags: [],
    dotColor: "#B6B6B6"
},
{
    key: '12',
    name: 'Garcia, Emily',
    age: 51,
    metricData: [
      {
        metric: 'Step Count',
        data: [7022, 0],
        avg: 3511,
        percentage: 0,
        decimal: 0,
        arrow: 'down'
      },
      {
        metric: 'Heart Rate',
        data: [0, 0],
        avg: 0,
        percentage: 0,
        decimal: 0,
        arrow: 'none'
      },
      {
        metric: 'Hrs of Sleep',
        data: [0, 0],
        avg: 0,
        percentage: 0,
        decimal: 0,
        arrow: 'none'
      }
    ],
    pfTags: [],
    piTags: [],
    dotColor: '#808080'
  },
  {
    key: '13',
    name: 'Alexander Evans',
    age: 55,
    metricData: [
      {
        metric: 'Step Count',
        data: [8643, 5912, 0, 0, 0, 0],
        avg: 2425,
        percentage: 356,
        decimal: 0,
        arrow: 'up'
      },
      {
        metric: 'Heart Rate',
        data: [0, 0, 0, 0, 0, 0],
        avg: 0,
        percentage: 0,
        decimal: 0,
        arrow: 'right'
      },
      {
        metric: 'Hrs of Sleep',
        data: [0, 0, 0, 0, 0, 0],
        avg: 0,
        percentage: 0,
        decimal: 0,
        arrow: 'right'
      }
    ],
    pfTags: [],
    piTags: [],
    dotColor: '#B92B2B'
  },
  {
    key: 14,
    name: 'Green, Benjamin',
    age: 54,
    metricData: [
        {
            metric: 'Step Count',
            data: [7843, 9412, 11013, 6745, 12345, 8921],
            avg: 9168.166666666666,
            percentage: 119.0385756032819,
            decimal: 21.17086834733898,
            arrow: 'up'
        },
        {
            metric: 'Heart Rate',
            data: [71, 79, 75, 83, 68, 81],
            avg: 76.16666666666667,
            percentage: 100.0,
            decimal: 0.0,
            arrow: 'right'
        },
        {
            metric: 'Hrs of Sleep',
            data: [6.5, 7.2, 8.1, 6.9, 7.8, 6.7],
            avg: 7.25,
            percentage: 0,
            decimal: 0,
            arrow: 'right'
        }
    ],
    pfTags: [],
    piTags: [],
    dotColor: '#F78C6C'
},
{
    key: 15,
    name: 'Parker, Henry',
    age: 59,
    metricData: [
        {
            metric: 'Step Count',
            data: [0, 0, 0, 0, 14209, 10010],
            avg: 3679.8333333333335,
            percentage: 385.3163286908078,
            decimal: 286.4159524324042,
            arrow: 'up'
        },
        {
            metric: 'Heart Rate',
            data: [83, 72, 76, 89, 70, 84],
            avg: 79,
            percentage: 100,
            decimal: 0,
            arrow: 'right'
        },
        {
            metric: 'Hrs of Sleep',
            data: [ 6.3, 7.1, 8.2, 5.9, 7.9, 6.8 ],
            avg: 7.016666666666667,
            percentage: -10.047846889952157,
            decimal: -0.6996416558659174,
            arrow: 'down'
        }
    ],
    pfTags: [],
    piTags: [],
    dotColor: '#F6D155'
},
{
    key: 16,
    name: "Scott, Dylan",
    age: 63,
    metricData: [
        {
            metric: "Step Count",
            data: [7213, 8123, 13322, 9467, 6521, 11412],
            avg: 9372.666666666666,
            percentage: 122.67441860465117,
            decimal: 23.25581395348837,
            arrow: "up"
        },
        {
            metric: "Heart Rate",
            data: [76, 82, 69, 0, 91, 73],
            avg: 67.66666666666667,
            percentage: 0.0,
            decimal: 0.0,
            arrow: "down"
        },
        {
            metric: "Hrs of Sleep",
            data: [7.4, 7.9, 8, 6.8, 8.3, 7.6],
            avg: 7.733333333333333,
            percentage: 14.925373134328353,
            decimal: 1.1261261261261256,
            arrow: "up"
        }
    ],
    pfTags: [],
    piTags: [],
    dotColor: "#56C596"
},
{
    key: '17',
    name: 'Walker, Abigail',
    age: 64,
    metricData: [
    {
        metric: "Step Count",
        data: [8132, 9785, 0, 5209, 13912, 7721],
        avg: 8776.5,
        percentage: 127.02203148688103,
        decimal: 27.022031486881035,
        arrow: "up"
    },
    {
        metric: "Heart Rate",
        data: [80, 74, 68, 0, 71, 85],
        avg: 64.66666666666667,
        percentage: 0,
        decimal: 0,
        arrow: "right"
    },
    {
        metric: "Hrs of Sleep",
        data: [7.1, 8.5, 0, 0, 0, 0],
        avg: 2.2666666666666666,
        percentage: 0,
        decimal: 0,
        arrow: "right"
    }
    ],
    pfTags: [],
    piTags: [],
    dotColor: "#5CDB95"
    },
    {
        key: 18,
        name: "Cooper, Olivia",
        age: 57,
        metricData: [
            {
                metric: "Step Count",
                data: [0, 9445, 11002, 5830, 12843, 8923],
                avg: 8056.666666666667,
                percentage: 105.75532032290749,
                decimal: 18.372325736899964,
                arrow: "up"
            },
            {
                metric: "Heart Rate",
                data: [84, 77, 73, 0, 69, 82],
                avg: 71.0,
                percentage: 0,
                decimal: 0,
                arrow: "right"
            },
            {
                metric: "Hrs of Sleep",
                data: [0, 0, 0, 6.7, 8.0, 6.3],
                avg: 5.0,
                percentage: 0,
                decimal: 0,
                arrow: "right"
            }
        ],
        pfTags: [],
        piTags: [],
        dotColor: "#F78C6C"
    },
    {
        key: 19,
        name: "Baker, Caroline",
        age: 60,
        metricData: [
            {
                metric: "Step Count",
                data: [7212, 8799, 13212, 9821, 6245, 11413],
                avg: 9090.333333333334,
                percentage: 117.48251748251748,
                decimal: 16.74876847290641,
                arrow: "up"
            },
            {
                metric: "Heart Rate",
                data: [77, 83, 70, 0, 89, 74],
                avg: 64.16666666666667,
                percentage: 0,
                decimal: 0,
                arrow: "right"
            },
            {
                metric: "Hrs of Sleep",
                data: [0, 7.2, 0, 6.8, 0, 7.6],
                avg: 3.433333333333333,
                percentage: 0.0,
                decimal: 0.0,
                arrow: 'right'
            }
        ],
        pfTags: [],
        piTags: [],
        dotColor: "#3E8DF3"
    },
    {
        key: '20',
        name: 'Young, Patrick',
        age: 53,
        metricData: [
        {
            metric: 'Step Count',
            data: [0, 0, 0, 5421, 14210, 9123],
            avg: 5668.333333333333,
            percentage: 93.61372950819671,
            decimal: -6.386270491803284,
            arrow: 'down'
        },
        {
            metric: 'Heart Rate',
            data: [0, 0, 0, 88, 70, 81],
            avg: 46.5,
            percentage: 0,
            decimal: 0,
            arrow: 'right'
        },
        {
            metric: "Hrs of Sleep",
            data: [0, 0, 0, 5.9, 8.3, 6.8],
            avg: 5.666666666666667,
            percentage: 100.0,
            decimal: 0.0,
            arrow: "right",
            }
        ],
        pfTags: [],
        piTags: [],
        dotColor: '#FABC3C'
        }

]


export default patientData;
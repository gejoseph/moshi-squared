const allWeeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"]

const stepCountAll = {
    chart: {
      id: "Step Count"
    },
    xaxis: {
      categories: allWeeks
    }
  }

const stepCount1 = {
    chart: {
      id: "Step Count"
    },
    xaxis: {
      categories: allWeeks.slice(0, 3)
    }
  }
const stepCount2 = {
    chart: {
      id: "Step Count"
    },
    xaxis: {
      categories: allWeeks.slice(3, 6)
    }
  }
const stepCount3 = {
    chart: {
      id: "Step Count"
    },
    xaxis: {
      categories: allWeeks.slice(6, 9)
    }
  }
const stepCount4 = {
    chart: {
      id: "Step Count"
    },
    xaxis: {
      categories: allWeeks.slice(9, 12)
    }
  }

  const heartRateAll = {
    chart: {
      id: "Heart Rate"
    },
    xaxis: {
      categories: allWeeks
    }
  }

  const heartRate1 = {
    chart: {
      id: "Heart Rate"
    },
    xaxis: {
      categories: allWeeks.slice(0, 3)
    }
  }

  const heartRate2 = {
    chart: {
      id: "Heart Rate"
    },
    xaxis: {
      categories: allWeeks.slice(3, 6)
    }
  }

  const heartRate3 = {
    chart: {
      id: "Heart Rate"
    },
    xaxis: {
      categories: allWeeks.slice(6, 9)
    }
  }

  const heartRate4 = {
    chart: {
      id: "Heart Rate"
    },
    xaxis: {
      categories: allWeeks.slice(9, 12)
    }
  }

const hrsOfSleepAll = {
    chart: {
      id: "Hrs of Sleep"
    },
    xaxis: {
      categories: allWeeks
    }
  }

  const hrsOfSleep1 = {
    chart: {
      id: "Hrs of Sleep"
    },
    xaxis: {
      categories: allWeeks.slice(0, 3)
    }
  }

  const hrsOfSleep2 = {
    chart: {
      id: "Hrs of Sleep"
    },
    xaxis: {
      categories: allWeeks.slice(3, 6)
    }
  }

  const hrsOfSleep3 = {
    chart: {
      id: "Hrs of Sleep"
    },
    xaxis: {
      categories: allWeeks.slice(6, 9)
    }
  }

  const hrsOfSleep4 = {
    chart: {
      id: "Hrs of Sleep"
    },
    xaxis: {
      categories: allWeeks.slice(9, 12)
    }
  }

  export {
    stepCountAll,
    stepCount1,
    stepCount2,
    stepCount3,
    stepCount4,
    heartRateAll,
    heartRate1,
    heartRate2,
    heartRate3,
    heartRate4,
    hrsOfSleepAll,
    hrsOfSleep1,
    hrsOfSleep2,
    hrsOfSleep3,
    hrsOfSleep4
}
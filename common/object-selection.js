const workers = [
  {"name":"James","salary":300},
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Robert","salary":1500},
  {"name":"Linda","salary":1800},
];


const getWorthyWorkers = (workersArr) => {
  const worthyWorkers = [];

  workersArr.forEach(currentWoker => {
    if (currentWoker.salary > 1000) {
      worthyWorkers.push(currentWoker.name)
    }
  })

  return worthyWorkers;

}

console.log(getWorthyWorkers(workers));
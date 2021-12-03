function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
  }

  function mondayWork(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`);
  }

  function wrapAdjective (parameter = "*") {
      const part1 = "You are";
      return function innerFunction(parameter2 = "special") {
          const part2 = "special"
          return `${part1} ${parameter}${parameter2}${parameter}!`
      };
  }
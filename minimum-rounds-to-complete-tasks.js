/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = (tasks) => {
  tasks.sort();
  let obj = {};
  let res = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (obj[tasks[i]]) obj[tasks[i]]++;
    else obj[tasks[i]] = 1;
  }
  console.log(obj);
  for (key in obj) {
    const num = obj[key];
    if (num > 1) {
      const x = num / 2 === 2 || num / 2 === 1 ? 2 : 3;
      res += Math.ceil(num / x);
    } else return -1;
  }
  return res;
};

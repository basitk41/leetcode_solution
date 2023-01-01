// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const obj = { [nums[0]]: 0 };
  for (let i = 1; i < nums.length; i++) {
    const num = target - nums[i];
    if (obj.hasOwnProperty(num)) {
      return [obj[num], i];
    }
    obj[nums[i]] = i;
  }
  return [];
};

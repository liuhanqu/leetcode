/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
  const m = new Map();
  for (const num of nums) {
    m.set(num, true);
  }

  let longestStreak = 0;

  for (const num of nums) {
    let currentNum = num;
    let currentStreak = 1;

    while (m.get(currentNum + 1)) {
      currentNum += 1;
      currentStreak += 1;
    }

    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return longestStreak;
};

// var longestConsecutive = function(nums) {
//   nums = nums.sort((a, b) => a > b);

//   let longestStreak = 1;
//   let currentStreak = 1;

//   for (let i = 0, len = nums.length; i < len; i++) {
//     if (nums[i] - nums[i - 1] === 1) {
//       currentStreak += 1;
//     } else {
//       longestStreak = Math.max(currentStreak, longestStreak);
//       currentStreak = 1;
//     }
//   }

//   return Math.max(longestStreak, currentStreak);
// };

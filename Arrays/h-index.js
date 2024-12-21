// Leetcode
// https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // [3,0,6,1,5] -> [ 1, 1, 0, 1, 0, 2 ]
  // Second arry represents the no of papers with index as citation
  const paperCounts = Array(citations.length + 1).fill(0);

  for (let i = 0; i < citations.length; i++) {
    paperCounts[Math.min(citations.length, citations[i])] += 1;
  }
  let h = citations.length;
  let papers = paperCounts[h];
  while (papers < h) {
    h--;
    papers = paperCounts[h] + papers;
  }
  return h;
};

console.log(hIndex([3, 0, 6, 1, 5]));

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.resultList = [];
  nums.reduce((prevNum, num) => {
      const tempSum = prevNum + num;
      this.resultList.push(tempSum);
      return tempSum;
  }, 0);
};


/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) return this.resultList[j];
  return this.resultList[j] - this.resultList[i - 1];
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(i,j)
*/
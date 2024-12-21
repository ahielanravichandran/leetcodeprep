var RandomizedSet = function () {
  this.arr = new Array();
  this.valueMap = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.valueMap.has(val)) return false;
  const arrayLength = this.arr.length;
  this.arr.push(val);
  this.valueMap.set(val, arrayLength);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.valueMap.has(val)) return false;
  let index = this.valueMap.get(val);
  this.arr[index] = this.arr[this.arr.length - 1];
  this.valueMap.set(this.arr[index], index);
  this.valueMap.delete(val);
  this.arr.pop();
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

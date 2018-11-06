/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = new Map();
  this.num = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.get(val) !== undefined) {
    return false;
  }
  this.map.set(val, this.num.length);
  this.num.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.map.get(val) === undefined) {
    return false;
  }
  const idx = this.map.get(val);
  const len = this.num.length;
  if (idx !== len - 1) {
    [this.num[idx], this.num[len - 1]] = [this.num[len - 1], this.num[idx]];
    this.map.set(this.num[idx], idx);
  }

  this.map.delete(val);
  this.num.pop();
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const idx = Math.floor(Math.random() * this.num.length);
  return this.num[idx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

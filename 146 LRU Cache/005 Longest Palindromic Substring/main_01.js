/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.LRUStack = [];
  this.maximum = capacity;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
      this.update(key);
      return this.cache.get(key);
  }
  return -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  this.cache.set(key, value);
  if (this.cache.size > this.maximum) {
      const removeKey = this.LRUStack.pop();
      this.cache.delete(removeKey);
  }
  this.update(key);
};

// 更新LRU
LRUCache.prototype.update = function (key) {
  const targetIndex = this.LRUStack.findIndex(LRCKey => LRCKey === key);
  if (targetIndex >= 0) {
      this.LRUStack.splice(targetIndex, 1);
  }
  this.LRUStack.unshift(key);
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
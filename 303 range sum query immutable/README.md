# Range Sum Query - Immutable

> 收录在LeetCode字节跳动题库中

## Question

### leetcode

[Range Sum Query - Immutable](https://leetcode-cn.com/problems/range-sum-query-immutable/)

### 中文描述：

给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

### 例子

```
给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

## Answer

### 思路

使用reduce方法遍历，依次求出和，然后求区间范围的和，分如下两种情况：
1. 从0开始，那么结果就是`result[j]`；
2. 如果非0，那么结果就是`result[j] - result[i - 1]`，之所以取`i - 1`是因为左区间为闭区间。

### 代码

[JS](./main_01.js)

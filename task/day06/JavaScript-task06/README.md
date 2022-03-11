# 灵活的操作JavaScript数组

## 课程目标

- 掌握 .filter,.map,.reduce 三种方法的使用

## 笔记

### 数组过滤器filter

- 可以根据某些条件过滤数组

### 数组过滤器Map

- 可以将一个数组转换为另一个数组
- 该方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。

### 数组过滤器Reduce

- .reduce() 可用于将输入数组转换为您想要的任何输出，同时保留原始数组

- 可以用于实现数组累加

- ```javascript
  const newValue = arr.reduce(function(accumulator, currentValue, index, array) {
    // Do stuff with accumulator and currentValue (index, array, and initialValue are optional)
  }, initialValue);
  ```

- newValue : 返回的新数字、数组、字符串或对象
- arr : 正在操作的数组
- accumulator :上一次迭代的返回值
- currentValue :数组中的当前项
- index : 当前项目的索引
- array-reduce():被调用的原始数组
- initialValue :用作最终输出初始值的数字、数组、字符串或对象

- 如果调用`reduce()`时提供了`initialValue`，`accumulator`取值为`initialValue`，`currentValue`取数组中的第一个值；如果没有提供 `initialValue`，那么`accumulator`取数组中的第一个值，`currentValue`取数组中的第二个值。
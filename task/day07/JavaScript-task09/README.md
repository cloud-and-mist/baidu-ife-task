# JavaScript对象基础

## 笔记

- 点表示法只能接收字面量的成员的名字，不接受变量作为名字，如果要将变量作为名字，使用括号表示法

### 对象遍历

- [Object.keys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) —— 返回一个包含该对象所有的键的数组。
- [Object.values(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/values) —— 返回一个包含该对象所有的值的数组。
- [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) —— 返回一个包含该对象所有 [key, value] 键值对的数组。
- `Object.fromEntries`——可以将键值对数组转回对象，可以与上面的entries配合使用

### 克隆对象——Object.assign

- 是浅拷贝

## tips

- map和forEach的区别：
  - forEach()针对每一个元素执行提供的函数，对数据的操作会改变原数组
  - map()不会改变原数组的值，返回一个新数组，新数组中的值为原数组调用函数处理之后的值
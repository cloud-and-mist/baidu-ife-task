# JavaScript 数组基础

### 数组和常量

- 即使变量 users 是用 const 定义的 ，我们依然可以向users 中添加数据 那是因为 const 意味着您只能在定义变量时为其赋值一次。但这并不意味着变量是不可变的。它的内容可以改变。

- 将其声明为const的好处：一旦您将其定义为数组，它将始终保持为数组，这意味着您可以安全地对其调用数组方法。但是，数组内容可以更改。

### forEach()

- 如果数组在迭代时被修改了，则其他元素会被跳过

- 下面的例子会输出 "one", "two", "four"。当到达包含值 "two" 的项时，整个数组的第一个项被移除了，这导致所有剩下的项上移一个位置。因为元素 "four" 正位于在数组更前的位置，所以 "three" 会被跳过。 `forEach()` 不会在迭代之前创建数组的副本。

  ```JavaScript
  var words = ['one', 'two', 'three', 'four'];
  words.forEach(function(word) {
    console.log(word);
    if (word === 'two') {
      words.shift();
    }
  });
  // one
  // two
  // four
  ```
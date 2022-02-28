# 使用函数创建模块化代码

## 笔记

### 1. 外部变量

- 函数可以访问外部变量，函数也可以修改外部变量
- 如果在函数内声明了同名变量，那么函数会遮蔽外部变量

### 2. ${}字符串拼接

- 配合反单引号完成拼接字符串的功能

  ```javascript
  let a = 1;
  console.log(`a的值为：${a}`);
  ```

### 3. 箭头函数

- 箭头函数：从箭头的左侧获取参数，然后使用参数计算右侧表达式的值

  ```javascript
  let sum = (a, b) => {  // 花括号表示开始一个多行函数
    let result = a + b;
    return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
  };
  
  alert( sum(1, 2) ); // 3
  ```

  ```javascript
  let sum = (a, b) => a + b;
  alert( sum(1, 2) ); // 3
  ```

  ```javascript
  setTimeout(() => { 
      console.log("This message is shown after 3 seconds");
  }, 3000);
  //等同于
  setTimeout(function() {  
      console.log("This message is shown after 3 seconds");
  }, 3000);
  ```

## 自测问题

1. 下面的哪个变量是在全局作用域中定义的：a、b、c 或 d？

```javascript
var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();//a?
```

2. 下面这段代码返回的是什么？

```javascript
function sleep() {
  console.log("I'm sleepy!");
  return "我睡着了";
  return "我在打呼";
}

sleep(); //“我睡着了”
```

3. 不用将代码粘贴到控制台中，能判断出这段代码的输出内容吗？

```javascript
var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x); //4
```
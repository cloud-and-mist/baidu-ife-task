# 操作字符串对象

- 当你知道字符串中的子字符串开始的位置，以及想要结束的字符时，[`slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)可以用来提取 它。 尝试以下：【提取字符串为mozilla】

  ```JavaScript
  browserType.slice(0,3);
  ```

  此时返回“moz”——第一个参数是开始提取的字符位置，第二个参数是提取的最后一个字符的后一个位置。所以提取从第一个位置开始，直到但不包括最后一个位置。

- 如果您知道要在某个字符之后提取字符串中的所有剩余字符，则不必包含第二个参数，而只需要包含要从中提取的字符位置 字符串中的其余字符。 尝试以下：

  ```JavaScript
  browserType.slice(2);
  ```

  这返回“zilla” —— 这是因为2的字符位置是字母z，并且因为没有包含第二个参数，所以返回的子字符串是字符串中的所有剩余字符。

- 字符串方法[`toLowerCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)和[`toUpperCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)字符串并将所有字符分别转换为小写或大写。 例如，如果要在将数据存储在数据库中之前对所有用户输入的数据进行规范化，这可能非常有用。

- 替换字符串的某部分：`replace()`但只能匹配找到的第一个字符

- 字符串内容不可以进行更改`str[0] = str[1]`这样是不可以的

## 字符串转换成数

- 字符串 - '0'
- 字符串 - ''
- Number(字符串)
- ParseInt(字符串)
- ParseFloat(字符串)
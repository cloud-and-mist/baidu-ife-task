# JavaScript-条件判断-循环语句-基本使用

## 笔记

### 1. null和undefined

- 当使用数学式或其他比较方法`< > <= >=`时，`null/undefined`会被转化为数字，`null`被转换成0，`undefined`被转化成NaN
- `undefined` 和 `null` 在相等性检查 `==` 中不会进行任何的类型转换，它们有自己独立的比较规则，所以除了它们之间互等外，不会等于任何其他的值。

### 2. 类型转换

- 只有**不同类型的值**在比较时才会转换成数字，同类型如字符串的比较规则是逐一字符比较`"2">"12"->true`

- 在类型转换中：数字`0`、空字符串`""`、`null`、`undefined `和 `NaN` 都会被转换成 `false`。因为它们被称为“假值（falsy）”值。

### 3. JS脚本调用策略

- 外部链接JS文件使用了 JavaScript 的一项现代技术（`async` “异步”属性）来解决这一问题，它告知浏览器在遇到 `<script>` 元素时不要中断后续 HTML 内容的加载。

  ```html
  <script src="script.js" async></script>
  ```

  在上述情况下，脚本和HTML将一并加载，代码将顺利运行

- 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 `async`。

- 如果脚本需要等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 `defer`，将关联的脚本按所需顺序置于 HTML 中。【见下例】

  ```html
  <script defer src="js/vendor/jquery.js"></script>
  <script defer src="js/script2.js"></script>
  <script defer src="js/script3.js"></script>
  ```

  添加 `defer` 属性的脚本将按照在页面中出现的顺序加载，因此第二个示例可确保 `jquery.js` 必定加载于 `script2.js` 和 `script3.js` 之前，同时 `script2.js` 必定加载于 `script3.js` 之前。


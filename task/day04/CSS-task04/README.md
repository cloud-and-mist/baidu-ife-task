# CSS-制作一些有趣的效果

## 笔记

### 文本

- 可以去[Google Fonts](https://www.google.com/fonts)获取想要的字体
- 浏览器的 `font-size` 标准设置的值为 16px
-  [`text-align`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align) 属性用来控制文本如何和它所在的内容盒子对齐。

-  **`writing-mode`** 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。

### 水平居中

- 现代浏览器中实现水平居中，可以使用 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)`: flex; `[`justify-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)`: center;`。
- 实现在父元素中居中，可使用 `margin: 0 auto;`。

### 居中

- 要实现div中的文本水平垂直居中，最准确的方法是将div设置成flex布局，`align-items:center;justify-content:center`

### 列表

- [`value`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol#attr-value) 属性允许设置列表项指定数值：设置了value后，列表的序号会变成value的值
- `ul > li { display:inline-block; }`可以让列表横向展示

## 遇到的问题

- 比如看到案例中，a标签直接设置了padding值，可以把文字挤到居中的位置，那是因为此时没有对a标签设置宽高

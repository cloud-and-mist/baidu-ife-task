# CSS-盒子浮动模型

## 笔记

- 诸如标题(`<h1>`等)和段落(`<p>`)默认情况下都是块级的盒子。

- 如果一个盒子对外显示为 `inline`，那么他的行为如下:
  - 盒子不会产生换行。
  -  [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性将不起作用。
  - 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
  - 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

### CSS-浮动

- 浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止，由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样

### 圣杯布局

- [参考视频](https://www.bilibili.com/video/BV17J411x7Mo?from=search&seid=18301586227268740474&spm_id_from=333.337.0.0)【有疑惑还是看看参考吧，蛮清晰】
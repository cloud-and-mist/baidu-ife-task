# CSS基础

## 笔记

### CSS-单位

- 绝对长度单位是固定的，如px
- 相对长度单位规定相对于另一个长度属性的长度。相对长度单位在不同渲染介质之间缩放表现得更好，如em【相对于元素的字体大小（font-size）（2em 表示当前字体大小的 2 倍）】

### CSS-文本

- 浏览器中默认的文本大小是16px，1em默认尺寸是16px

- `text-indent`用于制造首行缩进。可以为所有块级元素应用 text-indent，但无法将该属性应用于行内元素，图像之类的替换元素上也无法应用 text-indent 属性。不过，如果一个块级元素（比如段落）的首行中有一个图像，它会随该行的其余文本移动。
  - 如果想把一个行内元素的第一行“缩进”，可以用左内边距或外边距创造这种效果。

## 自测问题

#### 1. CSS引入有几种方式？分别说说三种方式的使用方法和优缺点

- 外部样式表：`<link rel="stylesheet" type="text/css" href="style.css" />`
- 内部样式表：放在`<head>`标签下的`<style>`中
- 内联样式：存在于HTML元素的style属性之中。其特点是每个CSS表只影响一个元素。

#### 2. CSS 的工作原理是什么？浏览器遇到无法解析的CSS会发生什么？

- 浏览器什么也不会做，继续解析下一个CSS样式。

#### 3. CSS选择器是什么概念，属性选择器，ID选择器，类名选择器分别如何使用？

- 属性选择器：`a[href="http://baidu.com"]{}`
- ID选择器：`#id{}`
- 类名选择器：`.classname{}`

#### 4. 文本样式都有哪些相关属性，对应哪些值?

#### 5. 如何设置一个虚线边框？

#### 6. CSS 边框属性简写上下左右设置的顺序是怎么样的？

#### 7.文本如何实现想中文写作格式一样，首行空两格？

#### 8. 斜体，粗体，下划线分别怎么设置？

#### 9. 如何注释 CSS 单行代码？多行呢？

#### 10. 说说 em 单位与 px 单位的区别？思考 em 与 rem 区别

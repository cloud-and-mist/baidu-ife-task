# CSS选择器

## 笔记

### 1. 选择器优先级

一个选择器的优先级可以说是由四个部分相加 (分量)，可以认为是个十百千 — 四位数的四个位数：

1. **千位**： 如果声明在 [`style`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-style) 的属性（内联样式）则该位得一分。这样的声明没有选择器，所以它得分总是1000。
2. **百位**： 选择器中包含ID选择器则该位得一分。
3. **十位**： 选择器中包含类选择器、属性选择器或者伪类则该位得一分。
4. **个位**：选择器中包含元素、伪元素选择器则该位得一分。

### 2. nth-child和nth-of-type的区别

- `ele:nth-of-type(n)`是指父元素下的第n个ele元素
- `ele:nth-child(n)`是指父元素下第n个元素且这个元素为ele，若不是，则选择失败

## 自测问题

- 思考CSS 各种选择器的概念，使用方法及使用场景
- 说说CSS 选择器的优先级是怎么排序的？给标签选择器，类选择器，id选择器三个选择器优先级进行排序
- 如果为css规则添加`!important`，会出现什么效果？
- 给`div h1`、 `#div h1`、`h1`、`div h1 #_h`、`div h1.c_h`这几个选择器进行排序
- 说说`E:nth-last-of-type`与`E:last-child`区别
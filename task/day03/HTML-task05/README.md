# HTML表单元素

## 笔记

### 1. input标签的value属性

value 属性为 input 元素设定值。

对于不同的输入类型，value 属性的用法也不同：

- type="button", "reset", "submit" - 定义按钮上的显示的文本
- type="text", "password", "hidden" - 定义输入字段的初始值
- type="checkbox", "radio", "image" - 定义与输入相关联的值
- type="range"-定义初始值

**注释：**<input type="checkbox"> 和 <input type="radio"> 中必须设置 value 属性。

**注释：**value 属性无法与 <input type="file"> 一同使用。

**注释：**textarea不支持value属性

### 2. input标签的name属性

**用途1：** 作为可与服务器交互数据的HTML元素的服务器端的标示，比如input、select、textarea、和button等。我们可以在服务器端根据其Name通过Request.Params取得元素提交的值。

**用途2：** HTML元素Input type='radio'分组，我们知道radio button控件在同一个分组类，check操作是mutex的，同一时间只能选中一个radio，这个分组就是根据相同的Name属性来实现的。

**用途3：** 建立页面中的锚点，我们知道<a href="URL">link</a>是获得一个页面超级链接，如果不用href属性，而改用Name，如：<a name="PageBottom"></a>，我们就获得了一个页面锚点。

**用途4：** 作为对象的Identity，如Applet、Object、Embed等元素。比如在Applet对象实例中，我们将使用其Name来引用该对象。

**用途5：** 在IMG元素和MAP元素之间关联的时候，如果要定义IMG的热点区域，需要使用其属性usemap，使usemap="#name"(被关联的MAP元素的Name)。

**用途6：**  某些特定元素的属性，如attribute，meta和param。例如为Object定义参数<PARAM NAME = "appletParameter" VALUE = "value">或Meta中<META NAME = "Author" CONTENT = "Dave Raggett">。

### 3. label元素

- 将一个label元素和input元素相关联的方法：
  - 给input一个id属性，给label一个for属性，其值和id一样
  - 将input放在label里，此时不需要for和id属性

- 若input元素声明了type='button'和有效的value属性，不要为其添加label

## 自测问题

- 表单验证方式有几种？分别是什么？
- 设置输入框必填是哪个属性？
- 设置数字输入框的最少和最多限制是哪两个属性？
- 怎么验证输入是否符合 email 格式？
- `<form>` 表单有什么作用？
- 表单的提交地址用什么属性来确定？
- 表单的提交方式是哪个属性来确定，表单有几种提交方式，请详细说明一下
- post 和 get 方式的区别？
- 在 input 里，name 有什么作用？
- 有哪些常用的 `<input>` 标签，分别有什么作用？


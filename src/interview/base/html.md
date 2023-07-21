## 说说flex布局？

布局的传统解决方案：基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

Flex布局，也称为Flexible Box布局，是一种一维的布局模型，也就是**弹性布局**。它为盒状模型提供了最大的灵活性。任何一个容器都可以指定为Flex布局，行内元素也可以使用Flex布局。

采用Flex布局的元素称为Flex容器（flex container），简称**容器**。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称**项目**。容器默认存在两根轴：**水平的主轴**（main axis）和**垂直的交叉轴**（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

容器和项目都有一些属性可以设置。容器上可以设置的属性包括`flex-direction`、`flex-wrap`、`flex-flow`、`justify-content`、`align-items`和`align-content`。

项目上可以设置的属性包括`order`、`flex-grow`、`flex-shrink`、`flex-basis`、`flex`和`align-self`。

## 介绍一下盒模型

盒模型，也称为**框模型（Box Model）**，是CSS布局的基础。它规定了网页元素如何显示以及元素间的相互关系。

盒模型包含了**元素内容（content）**、**内边距（padding）**、 **边框（border）** 和 **外边距（margin）** 几个要素。

盒模型分为两种：**W3C标准盒模型（普通盒模型）** 和 **IE盒模型（怪异盒模型）** 。

两种盒模型的主要区别是:标准盒模型的宽高是值内容宽高(content)

- 标准盒模型：只包含 content 。
- IE盒模型：content + padding + border


### 设置盒模型的方式是：设置 box-sizing（border-box不包含margin）
- content-box 标准盒模型（默认值）。如果你设置一个元素的宽为 100px，那么这个元素的内容区会有 100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- border-box（IE盒模型） 告诉浏览器：你想要设置的边框和内边距的值是包含在 width 内的。也就是说，如果你将一个元素的 width 设为 100px，那么这 100px 会包含它的 border 和 padding，内容区的实际宽度是 width 减去 (border + padding) 的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。

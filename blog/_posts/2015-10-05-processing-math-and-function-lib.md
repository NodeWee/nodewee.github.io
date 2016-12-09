---
title: 'Processing 数学方法与功能函数'
layout: post
guid: 20151005-1725
categories:
 - 笔记
tags:
 - Processing
 - 数学 
 - 编程开发

---


\> to make simple & efficient

001\. 数值在一个区间段递增循环 [via](https://processing.org/reference/modulo.html)
<code><pre>
//例如从0增加到99，再从0开始
int a = 0;
a = (a + 1) % 100; 
</pre></code>


002\. 按曲线轨迹显示形状 [\[via\]](https://processing.org/tutorials/text/)  
![](./files/2015/1005/math/002.jpg)  
[>code](./files/2015/1005/math/002.txt)

003\. 按曲线轨迹显示文字 [\[via\]](https://processing.org/tutorials/text/)  
![](./files/2015/1005/math/003.jpg)  
[>code](./files/2015/1005/math/003.txt)


**004\. 物体运动基础（向量的概念和用法）**

粒子思路做视效或仿真物理规则，向量的概念和用法是基础，很重要。
官方的指导手册从简到炫一步一实例，非常好的学习教程 [https://processing.org/tutorials/pvector/](https://processing.org/tutorials/pvector/)

005\. 球坐标系(r,θ,φ)与直角坐标系(x,y,z)的转换  
![](./files/2015/1005/math/spherical-coordinates.jpg)  
球坐标转换为直角坐标公式：    
<code><pre>x=rsinθ cosφ
y=rsinθ sinφ
z=rcosθ</pre></code>

直角坐标转换为球坐标公式：  
![](./files/2015/1005/math/formula-rc2sc.png)


006\. 多边形绘制函数  
[>code](./files/2015/1005/math/function_polygon.txt)


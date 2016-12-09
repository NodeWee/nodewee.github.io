---
title: 'Processing 声音处理之Minim库'
layout: post
guid: 20151015-2333
categories:
 - 笔记
tags:
 - Processing
 - 声音
 - Minim
 - 编程开发

---


> 一开始试用的是官方库的Sound库，发现在32位的Windows系统下无法使用。 然后通过搜索发现了**Minim库**。  


库的安装：  
通过IDE的 Contribution Manager 就可以安装（IDE菜单 -> 工具 -> 添加工具）。  


**接收麦克风输入**  
`AudioInput in;`    
`in = minim.getLineIn();`  

**声道的均方根（0~1之间的浮点数）**  
`.left.level()` //左声道均方根  
`.right.level()` //右声道均方根  

**声音数据缓存区**  
`.bufferSize();` //Returns the length of the buffer  
`.left.get(i);` //Gets the i<sup>th</sup> sample in the buffer. This method does not do bounds checking, so it may throw an exception  

**[> 点击查看示例代码](http://code.compartmental.net/minim/audioinput_class_audioinput.html)**

[> 另一种方法绘制波形图](http://code.compartmental.net/minim/audiolistener_method_samples.html)


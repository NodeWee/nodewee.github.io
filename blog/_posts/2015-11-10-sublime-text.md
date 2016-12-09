---
title: 'Sublime Text'
layout: post
guid: 20151110-2252
update: 20150406
categories:
 - 笔记
tags:
 - Sublime Text
 - 善用工具

---


Sublime Text 处理文本的性能强。大量文本编辑起来也很顺畅。

官网：[http://ankisrs.net/](http://ankisrs.net/)


**功能**  
调出 console：①快捷键`Ctrl + ~` 或 ②菜单 `View` → `Show Console`  

调出命令面板：①快捷键`Ctrl + Shift + P` 或 ②菜单`Tools` → `Command Paletter`

管理插件的插件：[Package Control](https://packagecontrol.io/installation)，安装方法见[官网](https://packagecontrol.io/installation)

用 Package Control 安装插件：
>命令面板里输入`Package Control: Install Package`，回车  
>输入插件名称，找到对应的插件，回车  




**显示**  
`Ctrl + Shift + [` 折叠代码  
`Ctrl + Shift + ]` 展开代码  
鼠标移到行号区，会出现向下的三角箭头，点击即可。反之展开代码。    
`F11` 全屏  
`Shift + F11` 专注模式，全屏且代码位于屏幕中央，无行号  


快速选择：  
`Ctrl + Shift + A` 选中标签内的内容。按两下，把标签也选中
`Ctrl + D` 选中鼠标所在位置的单词，继续按，向下选择相同单词  
`Shift + 鼠标右键` 多行光标模式（可纵向选择，可多行同时编辑）

移动：  
`Ctrl + Shift + ↑/↓` 上下移动已选中的行

快速编辑：  
`Ctrl + /` 添加或删除注释  
`Alt + .` 关闭标签（补充标签的关闭部分）  
`Ctrl + Shift + D` 复制并粘贴此行  
`Ctrl + Shift + K` 删除此行  


批量编辑/多处同时编辑文本：
>例如修改`var ABC`为`var BCD`  

方法①：当然就是替换功能了，快捷键： `[Ctrl + H]`   
方法②：选择某个内容（例如“var ABC”）然后按 `[Ctrl + D]`，每按一次，会将下一个相同内容选中（例如“var ABC”），然后编辑，不仅可以编辑选中的内容，前后内容都可以编辑；所以这实际上是个高级定位光标的功能





## 功能扩展
对比文件差异：[FileDiffs](https://github.com/colinta/SublimeFileDiffs) 插件  
> 使用：命令面板输入 `FileDiffs: Menu`，或在编辑区鼠标右键单击  

HTML/CSS/JS 格式化：HTML-CSS-JS Prettify 插件  
> 使用： 编辑区鼠标右键选择对应菜单，或者快捷键（默认是）`Ctrl + Shift + H`



## 其它

发现的好玩技巧：  
全文每个字符之间插入一个指定字符。
> `[Ctrl + H]` 打开替换功能，`[Alt + R]`打开“Regular expression”模式。“Find What”一栏填写竖线字符“`|`”，“Replace with”一栏填写要插入的字符。



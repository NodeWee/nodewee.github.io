---
title: '博客日志'
layout: page
guid: logofblog
categories:
 - 日记
tags:
 - 博客

---

<center>log of blog</center>


#### 2015-11-29
* 开始使用水印。部分图片手工添加水印
* 修改文章目录从“`domain/年/月/日/文章.html`”改为“`domain/文章.html`”
* 博文的图片地址从“`/media/files/20xx/xx/xx/xxx.jpg`”改成“`./files/20xx/xxxx/xxx.jpg)`” ，相应的修改了博文中的图片URL

#### 2015-10-10  
* 建立博客日志，记录博客本身的更新
* 将顶部不直观的图标快捷导航改成文字
原：`<span><a title="{{ nav.title }}" href="{{ nav.href }}"><i class="{{ nav.class }}"></i></a></span>`
改为：`<span><a title="{{ nav.eng_title }}" href="{{ nav.href }}">{{ nav.title }}</a></span>`
* 博文分类：
	> 目录：日记，笔记，清单  
	> 标签：善用工具，编程开发，配置方法，……
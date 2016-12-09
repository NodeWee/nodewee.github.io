---
title: 'Internet Download Manager'
layout: post
guid: 20151025-1818
categories:
 - 笔记
tags:
 - Internet Download Manager
 - 善用工具

---



## 绿色激活 ##
环境：Windows 7, IDM 6.25   
原理：针对联网验证序列号的软件，可通过防火墙阻断其连接验证；  
1. 打开防火墙（网路连接 → 网络和共享中心 → Windows防火墙），
2. 高级设置 → 出站规则 → 新建规则 → 程序 → 此程序路径（找到IDMan.exe文件） → 选择阻止连接 → 何时应用（全选） → 给规则起个名字（随便写，例如：激活IDM） → 完成
3. 找到刚才新建的规则 → 右键 → 属性 → 作用域（标签卡） → 远程IP地址 → 选择“下列IP地址” → 添加IDM验证会连接的IP地址（50.22.78.28，169.55.0.224，169.55.0.227，169.55.40.5） → 应用
4. 打开IDM软件 → 菜单里选择“注册” → 随便填写名、姓、邮件地址，序列号找个符合其规则的填写（例如OS5HG-K90NH-SXOGT-7JYEZ） → 确认

搞定！（此方法来自[sasalemma](http://tieba.baidu.com/p/3878377959)）

> 如果能长期使用下去，会考虑付费支持正版的

##相关链接##
[IDM百度贴吧](http://tieba.baidu.com/f?kw=idm&ie=utf-8)

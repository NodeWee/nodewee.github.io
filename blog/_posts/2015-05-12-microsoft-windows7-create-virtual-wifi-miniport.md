---
title: 'Windows7开启虚拟WiFi'
layout: post
guid: 20150512-2132
categories:
 - 笔记
tags:
 - 虚拟WiFi
 - 善用工具

---


前提：  
1）电脑有线连接至互联网  
2）电脑有无线网卡  

##创建虚拟WiFi
1、以管理员权限运行命令行工具（找到`c:\windows\system32\cmd.exe` ，右键，以管理员身份运行）

2、输入并回车执行命令：`netsh wlan set hostednetwork mode=allow ssid=无线热点名称 key=无线热点密码`

![](./files/2015/0512/netsh.png)

如上图提示“已成功更改xxx”即表示创建成功

3、打开“网络和共享中心”--“更改适配器设置”看看是不是多了一项，多出一个无线配置，底下灰色小字是“Microsoft Virtual WiFi Miniport Adapter”。（为方便辨识，可将此无线名称修改为虚拟WiFi）

![](./files/2015/0512/adapter.png)

4、在“网络连接”窗口中，右键单击已连接到Internet的网络连接，选择“属性”→“共享”，勾上“允许其他······连接(N)”并选择“虚拟WiFi”。

![](./files/2015/0512/internet.png)


##打开/关闭虚拟WiFi
6、打开虚拟WiFi
在cmd窗口输入并回车执行：`netsh wlan start hostednetwork`  
![](./files/2015/0512/wifi-start-success.png)  
如上图提示“已启动承载网络”，则表示打开成功。  

若出现错误：  
![](./files/2015/0512/wifi-start-error.png)  
应该是笔记本的无线设备被关闭了，打开无线设备；  
然后再重新启动虚拟WiFi即可（打开网络和共享中心，然后打开“更改适配器设置”，找到虚拟WiFi，右击“禁用”，然后右击“启用”）

7、关闭虚拟WiFi  
在cmd窗口输入并回车执行：`netsh wlan stop hostednetwork`